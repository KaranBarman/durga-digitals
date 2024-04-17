import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import { Button, buttonVariants } from "./ui/button";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <div className=" border-b border-gray-200 bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className=" relative">
        <MaxWidthWrapper>
          <div className=" flex items-center h-16">
            <MobileNav />
            <div className=" ml-4 flex lg:ml-0 items-center gap-8">
              <Link href={"/"}>
                <Image
                  src={"/Untitled design.png"}
                  alt="logo"
                  width={60}
                  height={50}
                  unoptimized
                />
              </Link>
              <Link
                href={"https://wa.me/message/KZYCFDFL3N6NA1?src=qr"}
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  " lg:hidden"
                )}
              >
                Contact us
              </Link>
            </div>
            <div className=" hidden z-50 lg:ml-8 lg:block lg:self-stretch">
              <NavItems />
            </div>

            <div className=" ml-auto flex items-center">
              <div className=" hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <Link
                  href={"/products"}
                  className={buttonVariants({ variant: "ghost" })}
                >
                  what we do
                </Link>

                <Link
                  href={"/pricing"}
                  className={buttonVariants({ variant: "ghost" })}
                >
                  Pricing
                </Link>

                <Link
                  href={"https://wa.me/message/KZYCFDFL3N6NA1?src=qr"}
                  className={buttonVariants({ variant: "ghost" })}
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
