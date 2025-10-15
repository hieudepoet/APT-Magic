"use client";
import React, { Children } from "react";

interface DirectedTranslateProps {
  children: React.ReactNode;
  xUnit: number; // from -10 to 10
  yUnit: number; // from -10 to 10
  step?: number;
  screenUnit?: number;
  distance?: number;
  className?: string;
}

// Reading Guide:
// All value is in pixels
// need to pass in the x and y translation values to define the direction (may be negative)
// --> set the direction of the translation by the sign and value of the x and y values
// like tong hop luc
// screenUnit: how many pixels the user needs to scroll to trigger one step of translation
// step: how many pixels the element will translate for each step
// distance: the maximum distance the element will translate

const DirectedTranslate: React.FC<DirectedTranslateProps> = ({
  children,
  xUnit, // from -10 to 10
  yUnit, // from -10 to 10
  step = 10, // how many pixels the element will translate for each step
  screenUnit = 100, // how many pixels the user needs to scroll to trigger one step of translation
  distance = 100, // the maximum distance the element will translate
  className = "",
}) => {
  const xUnitClamped = Math.max(-10, Math.min(10, xUnit)) / 10;
  const yUnitClamped = Math.max(-10, Math.min(10, yUnit)) / 10;
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let stepNumber = Math.min(scrollY / screenUnit, distance / step);
  stepNumber = isFinite(stepNumber) ? stepNumber : 0;

  return (
    <div
      className={className}
      style={{
        transform: `translate(${stepNumber * step * xUnitClamped}px, ${
          stepNumber * step * yUnitClamped
        }px)`,
        transition: "transform 0.1s linear",
      }}
    >
      {children}
    </div>
  );
};

export default DirectedTranslate;
