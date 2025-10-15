import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "none";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  isLoading?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  isLoading = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary:
      "bg-white text-black hover:bg-gray-200 hover:glow-white focus:ring-gray-500 font-semibold",
    secondary:
      "bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-400 focus:ring-gray-500",
    outline:
      "border border-gray-500 text-gray-300 hover:bg-gray-900 hover:text-white hover:border-white focus:ring-gray-500",
    none: "",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-400 border-t-transparent mr-2"></div>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
}
