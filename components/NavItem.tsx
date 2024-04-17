"use client";

import { Button, buttonVariants } from "./ui/button";
import { PRODUCT_CATEGORIES } from "@/config";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}
const NavItem = ({ category, isAnyOpen, isOpen, handleOpen }: NavItemProps) => {
  return (
    <div className="flex">
      <div className=" relative items-center flex">
        <Button
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
          className=" gap-1.5"
        >
          {category.label}
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-muted-foreground", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      </div>
      {isOpen ? (
        <div
          className={cn(
            "absolute inset-x-0 top-full text-muted-foreground text-start",
            { "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen }
          )}
        >
          <div
            className="absolute inset-0 top-1/2 bg-white shadow"
            aria-hidden="true"
          />
          <div className=" relative bg-white">
            <div className=" mx-auto max-w-7xl px-8">
              <Link
                href={category.value}
                className={buttonVariants({ variant: "ghost" })}
                onClick={handleOpen}
              >
                see benefits & features
              </Link>
              <div className=" grid grid-cols-4 gap-x-8 gap-y-10 py-12">
                <div className=" col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                  {category.features.map((item, i) => (
                    <div
                      className="group relative text-base sm:text-sm"
                      key={i}
                      onClick={handleOpen}
                    >
                      <Link
                        href={item.href}
                        className="block font-medium text-gray-900"
                      >
                        <div className=" mb-6 relative aspect-video overflow-hidden rounded-lg group-hover:75 bg-gray-100">
                          <Image
                            src={item.imageSrc}
                            alt={item.name}
                            fill
                            className=" object-cover object-center"
                          />
                        </div>
                        {item.name}
                      </Link>
                      <p className="mt-1" aria-hidden="true">
                        {item.tagline}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavItem;
