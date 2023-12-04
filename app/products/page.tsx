import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import Breadcrumbs from "@/components/breadcrumbs";
import { Globe, Rocket, Star } from "lucide-react";
import { PiShootingStarFill } from "react-icons/pi";
import Link from "next/link";
import React from "react";
import Why from "./why";
import Heading2 from "@/components/Heading2";

const page = () => {
  return (
    <MaxWidthWrapper className=" mt-7">
      <Breadcrumbs />
      <div className=" py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className=" text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          <Rocket /> Welcome to Durga Digitals -
          <span className=" text-blue-600">
            &nbsp;Your Gateway to Digital Excellence in Jaipur!
          </span>
        </h1>
        <p className=" mt-6 text-lg max-w-prose text-muted-foreground">
          At Durga Digitals, we redefine digital experiences by seamlessly
          integrating Social Media Marketing (SMM) and Web Development services.
          Nestled in the vibrant city of Jaipur, our passion is to propel
          businesses forward in the dynamic online landscape.
        </p>
        <div className=" flex flex-col gap-4 mt-6">
          <div>
            <Why subtitle="smm">
              <Heading2 title="Why Choose Durga Digitals?">
                {<PiShootingStarFill className="text-yellow-500" />}
              </Heading2>
            </Why>
          </div>
          <div>
            <Why subtitle="sww">
              <Heading2 title="Digital Solutions Tailored for Success">
                {<Globe />}
              </Heading2>
            </Why>
          </div>
        </div>
      </div>
      <ProductReel
        title="Customized web development"
        subTitle="we provide customized web development services tailored to meet your unique business needs, ensuring a seamless and effective online presence."
        key={"hii"}
        href="/webdev"
        link="Features & Benefits"
      />
      <ProductReel
        title="Social media marketing"
        subTitle="Crafting Connections, Driving Conversions: Elevate Your Brand with Strategic Social Media Marketing Solutions."
        smm
        key={"hiillo"}
        href="/smm"
        link="Features & Benefits"
      />
    </MaxWidthWrapper>
  );
};

export default page;
