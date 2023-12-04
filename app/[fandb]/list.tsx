import { Dot } from "lucide-react";
import React from "react";

interface ListProps {
  children: React.ReactNode;
}

const List = ({ children }: ListProps) => {
  return (
    <li className="ml-2 items-center gap-3 flex text-xl">
      <Dot className="h-9 w-9 flex-shrink-0" aria-hidden="true" />
      {children}
    </li>
  );
};

export default List;
