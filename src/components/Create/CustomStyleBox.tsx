import React from "react";
import SpotlightCard from "@/components/UI/SpotlightCard";

const CustomStyleBox = () => {
  return (
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
        Enhance image resolution to ultra-high definition with AI upscaling
      </p>
    </SpotlightCard>
  );
};

export default CustomStyleBox;
