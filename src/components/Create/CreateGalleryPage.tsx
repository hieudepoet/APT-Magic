"use client";

import { useState } from "react";
import TransformInterface from "@/components/Create/TransformInterface";
import FeaturesSection from "@/components/Create/FeaturesSection";

export default function CreateGalleryPage() {
  return (
    <div className="min-h-screen relative overflow-hidden pt-16 text-center">
      {/* Context */}
      <div className="relative z-10 pt-24 pb-12 mx-10">
        <FeaturesSection />
      </div>
    </div>
  );
}
