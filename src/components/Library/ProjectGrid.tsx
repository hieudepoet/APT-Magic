'use client';

import { useState } from 'react';
import Image from 'next/image';
import { TabType } from './LibraryProfile';
import ProjectModal from './ProjectModal';

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

interface ProjectGridProps {
  activeTab: TabType;
}

// Mock project data
const mockProjects: Project[] = [
  {
    id: '1',
    beforeImage: '/api/placeholder/300/300',
    afterImage: '/api/placeholder/300/300',
    transformType: 'anime',
    createdAt: '2024-01-01',
    isPosted: true,
    likes: 45,
    dislikes: 2
  },
  {
    id: '2',
    beforeImage: '/api/placeholder/300/300',
    afterImage: '/api/placeholder/300/300',
    transformType: 'restoration',
    createdAt: '2024-01-02',
    isPosted: false
  },
  {
    id: '3',
    beforeImage: '/api/placeholder/300/300',
    afterImage: '/api/placeholder/300/300',
    transformType: 'cyberpunk',
    createdAt: '2024-01-03',
    isPosted: true,
    likes: 78,
    dislikes: 5
  },
];

export default function ProjectGrid({ activeTab }: ProjectGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeTab === 'saved' 
    ? mockProjects 
    : mockProjects.filter(project => project.isPosted);

  if (filteredProjects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="text-6xl mb-6">📷</div>
        <h3 className="text-2xl font-semibold text-white mb-3">
          {activeTab === 'saved' ? 'No saved projects yet' : 'No posted projects yet'}
        </h3>
        <p className="text-gray-400 text-center max-w-md mb-8">
          {activeTab === 'saved' 
            ? 'Start creating amazing transformations to build your collection!'
            : 'Share your creations with the community to see them here!'
          }
        </p>
        <button className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200">
          Start Creating
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-1 md:gap-2">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
            onClick={() => setSelectedProject(project)}
          >
            <Image
              src={project.afterImage}
              alt="Project"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            
            {/* Overlay info */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.isPosted && project.likes !== undefined && (
                <div className="flex items-center gap-1 bg-black/70 rounded px-2 py-1">
                  <Image src="/heart.png" alt="like" width={12} height={12} />
                  <span className="text-white text-xs">{project.likes}</span>
                </div>
              )}
            </div>

            {/* Transform type indicator */}
            <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/70 rounded px-2 py-1">
                <span className="text-white text-xs capitalize">{project.transformType}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}