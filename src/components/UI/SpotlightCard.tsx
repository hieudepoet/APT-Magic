"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  imgUrl?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
  onClick?: () => void;
  href?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  imgUrl = "",
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
  onClick,
  href,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => setOpacity(0.6);
  const handleMouseLeave = () => setOpacity(0);

  const cardContent = (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative rounded-3xl border border-neutral-800 min-h-[220px] ${
        imgUrl ? "" : "bg-neutral-900"
      } overflow-hidden p-8 ${className}`}
    >
      {imgUrl && (
        <Image
          src={imgUrl}
          alt="Background"
          fill
          className="absolute inset-0 object-cover object-center -z-50"
        />
      )}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );

  return href ? (
    <Link href={href} className="block">
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
};

export default SpotlightCard;
