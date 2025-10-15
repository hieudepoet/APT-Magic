import api from '@/lib/axios';
import { useState } from 'react';

interface UploadResult {
  fileUrl: string;
  key: string;
}

export function useImageUpload() {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = async (
    file: File,
    folder: 'originals' | 'transformed' | 'thumbnails' | 'avatars' = 'originals'
  ): Promise<UploadResult | null> => {
    setUploading(true);
    setError(null);

    try {
      // Get presigned URL
      const response = await api.post('/upload/presigned-url', {
        fileName: file.name,
        fileType: file.type,
        folder,
      });

      if (response.data.error) {
        throw new Error('Failed to get upload URL');
      }

      const { uploadUrl, fileUrl, key } = response.data;

      // Upload file to S3
      const uploadResponse = await fetch(uploadUrl, {
        method: 'PUT',
        body: file,
        headers: { 'Content-Type': file.type },
      });

      if (!uploadResponse.ok) {
        throw new Error('Failed to upload file');
      }

      return { fileUrl, key };
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
      return null;
    } finally {
      setUploading(false);
    }
  };

  return { uploadImage, uploading, error };
}