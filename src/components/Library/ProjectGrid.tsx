'use client';

import { useState } from 'react';
import Image from 'next/image';
import { TabType } from './LibraryProfile';
import { useProjects } from '@/hooks/useProjects';
import ProjectModal from './ProjectModal';
import LoadingSpinner from '@/components/Common/LoadingSpinner';

interface Project {
  id: string;
  title?: string;
  transform_type: string;
  before_image_url: string;
  after_image_url: string;
  thumbnail_url?: string;
  status: 'saved' | 'posted';
  created_at: string;
}

interface ProjectGridProps {
  activeTab: TabType;
}



export default function ProjectGrid({ activeTab }: ProjectGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { projects, loading, error } = useProjects(activeTab);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-red-400 mb-4">Error: {error}</p>
        <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200">
          Retry
        </button>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 pt-10">
        <div className="text-6xl mb-6">?</div>
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
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
            onClick={() => setSelectedProject(project)}
          >
            <Image
              src={project.after_image_url}
              alt="Project"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            
            {/* Transform type indicator */}
            <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/70 rounded px-2 py-1">
                <span className="text-white text-xs capitalize">{project.transform_type}</span>
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