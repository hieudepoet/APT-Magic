"use client";

import { useState } from "react";
import TransformInterface from "@/components/Create/TransformInterface";
import FeaturesSection from "@/components/Create/FeaturesSection";

export default function CreatePage() {
  return (
    <div className="min-h-screen relative overflow-hidden pt-16">
      <div className="relative z-10 pt-24 pb-12">
        <FeaturesSection />
      </div>
    </div>
  );
}
