'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface Project {
  id: string;
  beforeImage: string;
  afterImage: string;
  transformType: 'restoration' | 'anime' | 'cyberpunk' | 'viral' | 'id' | 'ultra-hd';
  createdAt: string;
  isPosted: boolean;
  likes?: number;
  dislikes?: number;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const transformLabels = {
  restoration: 'Photo Restoration',
  anime: 'Anime Style',
  cyberpunk: 'Cyberpunk Style',
  viral: 'Viral Prompt',
  id: 'ID Photo',
  'ultra-hd': 'Ultra HD',
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden backdrop-blur-sm">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300">
                {transformLabels[project.transformType]}
              </span>
              <span className="text-sm text-gray-400">
                Created: {new Date(project.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {project.isPosted ? (
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Posted</span>
              ) : (
                <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded">Saved</span>
              )}
            </div>
          </div>

          {/* Before/After Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative aspect-square">
              <div className="absolute top-2 left-2 z-10 px-2 py-1 bg-black/70 rounded text-xs text-white">
                Before
              </div>
              <Image
                src={project.beforeImage}
                alt="Before transformation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square">
              <div className="absolute top-2 left-2 z-10 px-2 py-1 bg-black/70 rounded text-xs text-white">
                After
              </div>
              <Image
                src={project.afterImage}
                alt="After transformation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Stats (if posted) */}
          {project.isPosted && project.likes !== undefined && (
            <div className="p-4 border-t border-gray-800">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Image src="/heart.png" alt="like" width={16} height={16} />
                  <span className="text-white font-medium">{project.likes}</span>
                  <span className="text-gray-400 text-sm">likes</span>
                </div>
                {project.dislikes !== undefined && (
                  <div className="flex items-center gap-2">
                    <Image src="/dislike.png" alt="dislike" width={16} height={16} />
                    <span className="text-white font-medium">{project.dislikes}</span>
                    <span className="text-gray-400 text-sm">dislikes</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="p-4 border-t border-gray-800">
            <div className="flex gap-3">
              <button className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200">
                Download
              </button>
              {!project.isPosted && (
                <button className="flex-1 px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white hover:bg-white/30 transition-all duration-200">
                  Post to Community
                </button>
              )}
              <button className="px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/30 transition-all duration-200">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}