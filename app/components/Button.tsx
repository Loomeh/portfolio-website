"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface ButtonProps {
  name: string;
  url: string;
}

const Button: React.FC<ButtonProps> = ({ name, url }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(url);
  };

  return (
    <button onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
