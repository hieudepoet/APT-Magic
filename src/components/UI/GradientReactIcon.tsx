import React from "react";

interface GradientReactIconProps {
  icon: React.ElementType;
  size?: number;
  className?: string;
}

const GradientReactIcon: React.FC<GradientReactIconProps> = ({
  icon: Icon,
  size = 24,
  className = "",
}) => {
  return (
    <>
      <svg width="0" height="0" className="inline">
        <linearGradient id="icon-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="var(--ai-color-1)" offset="20%" />
          <stop stopColor="var(--ai-color-2)" offset="80%" />
        </linearGradient>
      </svg>
      <Icon
        className={className}
        size={size}
        style={{ fill: "url(#icon-gradient)" }}
      />
    </>
  );
};

export default GradientReactIcon;
