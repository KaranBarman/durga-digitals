import React from "react";
import { PiShootingStarFill } from "react-icons/pi";

interface Heading2Props {
  children?: React.ReactNode;
  title: string;
}

const Heading2 = ({ children, title }: Heading2Props) => {
  return (
    <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 sm:text-3xl">
      {children}
      {title}
    </h2>
  );
};

export default Heading2;
