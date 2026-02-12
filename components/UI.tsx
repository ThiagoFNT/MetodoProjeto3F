import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

// --- Buttons ---

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  // Apple style: smoother transitions, refined focus rings, pill shapes
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed tracking-tight";
  
  const variants = {
    // Apple Blue / Primary Black
    primary: "bg-[#1D1D1F] text-white hover:bg-gray-800 active:scale-[0.98]",
    // Prominent CTA (Green/Emerald for this product context, but cleaner)
    secondary: "bg-[#0071E3] text-white hover:bg-[#0077ED] active:scale-[0.98]", 
    // Outline usually has a very subtle border
    outline: "border border-[#D2D2D7] text-[#1D1D1F] hover:border-[#86868B] bg-transparent active:bg-gray-50",
    ghost: "text-[#0071E3] hover:text-[#0077ED] hover:bg-[#0071E3]/10",
  };

  const sizes = {
    sm: "text-[12px] px-4 py-1.5",
    md: "text-[14px] px-6 py-2.5",
    lg: "text-[17px] px-8 py-3.5",
  };

  // If the product theme is strictly recipes, we can override the secondary blue with a refined emerald
  // But for "Apple Style", Blue is standard. Let's keep Blue for buttons to match the requested style, 
  // or use a very refined Green. Let's stick to the variants defined above but maybe tweak secondary locally if needed.

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// --- Cards ---

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = false, noPadding = false }) => {
  // Apple cards: White, subtle border, very soft large shadow or no shadow
  return (
    <div 
      className={`bg-white rounded-[24px] overflow-hidden border border-[rgba(0,0,0,0.04)] shadow-[0_4px_24px_rgba(0,0,0,0.04)] ${noPadding ? '' : 'p-8'} ${hoverEffect ? 'hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow duration-300' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

// --- Section Wrapper ---

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'gray';
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, background = 'white' }) => {
  return (
    <section 
      id={id} 
      // Apple Backgrounds are usually #FFFFFF or #F5F5F7
      className={`py-24 md:py-32 overflow-hidden ${background === 'gray' ? 'bg-[#F5F5F7]' : 'bg-white'} ${className}`}
    >
      <div className="max-w-[1080px] mx-auto px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
};

// --- Typography ---

export const SectionHeading: React.FC<{ children: React.ReactNode, subtitle?: string, align?: 'left' | 'center' }> = ({ children, subtitle, align = 'center' }) => (
  <div className={`mb-20 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="text-4xl md:text-[48px] font-semibold tracking-tight text-[#1D1D1F] mb-4 leading-[1.05]">
      {children}
    </h2>
    {subtitle && (
      <p className="text-[19px] md:text-[21px] font-medium text-[#86868B] max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

// --- Icons ---

export const IconBox: React.FC<{ icon: LucideIcon, color?: string }> = ({ icon: Icon, color = 'text-[#1D1D1F]' }) => (
  <div className={`w-12 h-12 rounded-2xl bg-[#F5F5F7] flex items-center justify-center mb-6 ${color}`}>
    <Icon size={24} strokeWidth={1.5} />
  </div>
);