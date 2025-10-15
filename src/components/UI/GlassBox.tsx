import React from "react";

interface GlassBoxProps {
  children?: React.ReactNode;
  className?: string;
  borderPadding?: number;
}

const GlassBox: React.FC<GlassBoxProps> = ({
  children,
  className = "",
  borderPadding = 16,
}) => {
  return (
    <div
      className={`rounded-3xl bg-white/10 border flex justify-center items-center border-white/20 shadow-lg backdrop-blur-xl min-h-[50px] ${className}`}
      style={{ padding: `${borderPadding}px` }}
    >
      <div className="rounded-3xl border bg-white/10 border-white/20 shadow-lg backdrop-blur-xl w-full h-full overflow-hidden">
        {children}
      </div>
    </div>
  );
};
export default GlassBox;
