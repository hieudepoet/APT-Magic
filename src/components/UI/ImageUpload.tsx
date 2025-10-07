'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useImageUpload } from '@/hooks/useImageUpload';
import LoadingSpinner from '@/components/Common/LoadingSpinner';

interface ImageUploadProps {
  onUploadComplete: (fileUrl: string, key: string) => void;
  folder?: 'originals' | 'transformed' | 'thumbnails' | 'avatars';
  accept?: string;
  maxSize?: number;
  className?: string;
}

export default function ImageUpload({
  onUploadComplete,
  folder = 'originals',
  accept = 'image/*',
  maxSize = 10 * 1024 * 1024, // 10MB
  className = '',
}: ImageUploadProps) {
  const { uploadImage, uploading, error } = useImageUpload();
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    // Create preview
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);

    // Upload file
    const result = await uploadImage(file, folder);
    if (result) {
      onUploadComplete(result.fileUrl, result.key);
    }

    // Cleanup preview
    URL.revokeObjectURL(previewUrl);
  }, [uploadImage, folder, onUploadComplete]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { [accept]: [] },
    maxSize,
    multiple: false,
  });

  return (
    <div className={`relative ${className}`}>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200 ${
          isDragActive
            ? 'border-white bg-white/5'
            : 'border-gray-600 hover:border-gray-400 hover:bg-white/5'
        }`}
      >
        <input {...getInputProps()} />
        
        {uploading ? (
          <div className="flex flex-col items-center gap-4">
            <LoadingSpinner />
            <p className="text-gray-400">Uploading...</p>
          </div>
        ) : preview ? (
          <div className="flex flex-col items-center gap-4">
            <img src={preview} alt="Preview" className="max-h-32 rounded" />
            <p className="text-green-400">Upload complete!</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <div>
              <p className="text-white mb-1">
                {isDragActive ? 'Drop the image here' : 'Drag & drop an image here'}
              </p>
              <p className="text-gray-400 text-sm">or click to select</p>
            </div>
          </div>
        )}
      </div>
      
      {error && (
        <p className="text-red-400 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}