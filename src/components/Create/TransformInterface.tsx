"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/UI/Button";
import { TransformType } from "./TransformType";
import ImageUploadZone from "./ImageUploadZone";
import Background from "../Common/Background";

interface TransformInterfaceProps {
  transformType: TransformType;
  onBack: () => void;
}

export default function TransformInterface({
  transformType,
  onBack,
}: TransformInterfaceProps) {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleImageSelect = (file: File) => {
    setSelectedImage(file);
    setResult(null); // Clear previous result
  };

  const handleTransform = async () => {
    if (!selectedImage) return;

    setIsProcessing(true);

    // Simulate AI processing
    setTimeout(() => {
      // For demo, just show the original image as result
      const reader = new FileReader();
      reader.onload = () => {
        setResult(reader.result as string);
        setIsProcessing(false);
      };
      reader.readAsDataURL(selectedImage);
    }, 3000);
  };

  const handleSave = () => {
    // TODO: Implement save to library
    console.log("Saving to library...");
  };

  const handleShare = () => {
    // TODO: Implement share to community
    console.log("Sharing to community...");
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={onBack}
            className="flex items-center space-x-2"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back</span>
          </Button>

          <div
            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${transformType.gradient} flex items-center justify-center text-lg`}
          >
            {transformType.icon}
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white">
              {transformType.name}
            </h1>
            <p className="text-gray-400 text-sm">{transformType.description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Image Upload */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Original Image
            </h2>
            <ImageUploadZone
              onImageSelect={handleImageSelect}
              selectedImage={selectedImage}
            />
          </div>

          {selectedImage && (
            <div className="flex space-x-3">
              <Button
                variant="primary"
                onClick={handleTransform}
                isLoading={isProcessing}
                disabled={isProcessing}
                className="flex-1"
              >
                {isProcessing ? "Processing..." : `Apply ${transformType.name}`}
              </Button>
            </div>
          )}
        </div>

        {/* Right: Result */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Result</h2>

            <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-gray-900 border-2 border-dashed border-gray-600">
              {isProcessing ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mx-auto mb-4"></div>
                    <p className="text-gray-300">
                      AI is processing your image...
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Please wait a moment
                    </p>
                  </div>
                </div>
              ) : result ? (
                <Image
                  src={result}
                  alt="Transformed result"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-400">
                      Result will be displayed here
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      Upload image and click process
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {result && (
            <div className="flex space-x-3">
              <Button
                variant="secondary"
                onClick={handleSave}
                className="flex-1 flex items-center justify-center space-x-2"
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
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span>Save to Library</span>
              </Button>

              <Button
                variant="outline"
                onClick={handleShare}
                className="flex-1 flex items-center justify-center space-x-2"
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
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  />
                </svg>
                <span>Share</span>
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Comparison Slider (Future Enhancement) */}
      {result && selectedImage && (
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-white mb-4">
            Before and After Comparison
          </h3>
          <div className="bg-gray-800/50 rounded-2xl p-6">
            <p className="text-gray-400 text-center">
              Comparison slider will be added in the next version
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
