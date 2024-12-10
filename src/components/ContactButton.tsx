import React from 'react';

interface ContactButtonProps {
  icon: React.ReactNode;
  text: string;
  href: string;
  variant?: 'primary' | 'success';
}

export function ContactButton({ icon, text, href, variant = 'primary' }: ContactButtonProps) {
  const baseStyles = "flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200";
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    success: "bg-green-600 text-white hover:bg-green-700"
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variantStyles[variant]}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}