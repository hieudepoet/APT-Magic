"use client";
import React from "react";
import SpotlightCard from "@/components/UI/SpotlightCard";

const FeaturesSection = () => {
  return (
    <section className="sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div>
          *Cần thêm content vào đây
        </div>
        {/*line 1*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Restore Feature */}
          <SpotlightCard
            className="custom-spotlight-card text-center hover:cursor-pointer"
            spotlightColor="rgba(255, 255, 255, 0.67)"
            imgUrl="/sample-gen/color-restore.jpg"
            href="/create/color-restore"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Photo Restoration
            </h3>
            <p className="text-gray-200 font-semibold">
              Bring old and damaged photos back to life with AI-powered
              restoration
            </p>
          </SpotlightCard>

          {/* Anime Feature */}
          <SpotlightCard
            className="custom-spotlight-card text-center hover:cursor-pointer"
            spotlightColor="rgba(255, 255, 255, 0.67)"
            imgUrl="/sample-gen/anime-portrait.jpeg"
            href="/create/anime-style"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Anime Style</h3>
            <p className="text-gray-200 font-semibold">
              Transform your photos into beautiful anime-style artwork
            </p>
          </SpotlightCard>

          {/* Cyberpunk Feature */}
          <SpotlightCard
            className="custom-spotlight-card text-center hover:cursor-pointer"
            spotlightColor="rgba(255, 255, 255, 0.67)"
            imgUrl="/sample-gen/cyperbunk.jpg"
            href="/create/cyberpunk-style"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Cyberpunk Style
            </h3>
            <p className="text-gray-200 font-semibold">
              Add futuristic neon effects and cyberpunk aesthetics
            </p>
          </SpotlightCard>
        </div>

        {/*line 2*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Viral Prompt Feature */}
          <SpotlightCard
            className="custom-spotlight-card text-center hover:cursor-pointer opacity-60 cursor-not-allowed relative"
            spotlightColor="rgba(255, 255, 255, 0.67)"
            imgUrl="/sample-gen/viral-prompt.jpg"
            href="/create/viral-prompt"
          >
            <div className="absolute -top-1 right-0 bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-semibold z-10">
              Coming Soon
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Viral Prompt</h3>
            <p className="text-gray-200 font-semibold">
              Hot trend AI transformations with prompts shared widely on
              Facebook, TikTok
            </p>
          </SpotlightCard>

          {/* ID Photo Feature */}
          <SpotlightCard
            className="custom-spotlight-card text-center hover:cursor-pointer opacity-60 cursor-not-allowed relative"
            imgUrl="/sample-gen/red-bg-hot-trend.jpg"
            spotlightColor="rgba(255, 255, 255, 0.67)"
            href="/create/id-photo-hot-trend"
          >
            <div className="absolute -top-1 right-0 bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-semibold z-10">
              Coming Soon
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">ID Photo</h3>
            <p className="text-gray-200 font-semibold">
              Generate professional ID photos with perfect background and
              lighting
            </p>
          </SpotlightCard>

          {/* Ultra HD Feature */}
          <SpotlightCard
            className="custom-spotlight-card text-center hover:cursor-pointer opacity-60 cursor-not-allowed relative"
            imgUrl="/sample-gen/ultra-HD.jpeg"
            spotlightColor="rgba(255, 255, 255, 0.67)"
            href="/create/ultra-hd"
          >
            <div className="absolute -top-1 right-0 bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-semibold z-10">
              Coming Soon
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Ultra HD</h3>
            <p className="text-gray-200 font-semibold">
              Enhance image resolution to ultra-high definition with AI
              upscaling
            </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
