"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import Button from "@/components/UI/Button";

interface ImageUploadZoneProps {
  onImageSelect: (file: File | null) => void;
  selectedImage?: File | null;
}

export default function ImageUploadZone({
  onImageSelect,
  selectedImage,
}: ImageUploadZoneProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        onImageSelect(file);

        // Create preview
        const reader = new FileReader();
        reader.onload = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    },
    [onImageSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
    },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024, // 10MB
  });

  const clearImage = () => {
    setPreview(null);
    onImageSelect(null);
  };

  return (
    <div className="w-full">
      {!preview ? (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${
            isDragActive
              ? "border-white bg-white/5 scale-105"
              : "border-gray-600 hover:border-gray-400 hover:bg-gray-900/50"
          }`}
        >
          <input {...getInputProps()} />

          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {isDragActive ? "Drop image here" : "Upload Image"}
              </h3>
              <p className="text-gray-400 text-sm">
                Drag & drop or click to select image
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Supports: JPG, PNG, WEBP (max 10MB)
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-gray-900">
            <Image
              src={preview}
              alt="Preview"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="absolute top-4 right-4 flex space-x-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={clearImage}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>

          <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
            <div className="flex items-center justify-between text-sm text-gray-300">
              <span>Selected image:</span>
              <span className="font-medium">{selectedImage?.name}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-400 mt-1">
              <span>Size:</span>
              <span>
                {selectedImage
                  ? (selectedImage.size / 1024 / 1024).toFixed(2)
                  : 0}{" "}
                MB
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
