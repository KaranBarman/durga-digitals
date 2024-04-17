import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Rocket, Target, PencilRuler } from "lucide-react";
import ProductReel from "@/components/ProductReel";
import Why from "./products/why";
import Heading2 from "@/components/Heading2";
import { PiShootingStarFill } from "react-icons/pi";
import Image from "next/image";

const perks = [
  {
    name: "Future-Ready Tech Solutions",
    Icon: Rocket,
    description:
      "Propel your business forward with cutting-edge technologies, ensuring sustained growth in the ever-evolving digital landscape.",
  },
  {
    name: "Targeted Audience Engagement",
    Icon: Target,
    description:
      "Pinpoint your ideal audience with precision for effective and impactful interactions",
  },
  {
    name: "Customized Web Development Solutions",
    Icon: PencilRuler,
    description:
      "Building digital foundations with precision and creativity for an impactful online presence.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className=" py-20 mx-auto text-center flex flex-col items-center max-w-4xl">
          <h1 className=" text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Durga Digitals, Digital Marketing Agency Jaipur
            <span className=" text-blue-600">
              &nbsp;Shift your shop online with us!{""}
            </span>
          </h1>
          <p className=" mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to Durga Digitals. Comprehensive Guide to Social Media
            Marketing, Creative Posts, Facebook, and Instagram Strategies
          </p>
          <Why subtitle="smm">
            <Heading2 title="Why Choose Durga Digitals">
              {<PiShootingStarFill className="text-yellow-500" />}
            </Heading2>
          </Why>
          <div className="p-8">
            <h1 className="text-4xl font-bold capitalize">
              our precious client
            </h1>
            <ul className=" flex items-center justify-center py-10 gap-10">
              <li>
                <Image
                  src={"/logos/logo1.png"}
                  alt="com"
                  width={100}
                  height={100}
                  unoptimized
                />
              </li>
              <li>
                <Image
                  src={"/logos/logo4.png"}
                  unoptimized
                  alt="com"
                  width={100}
                  height={100}
                />
              </li>
              <li>
                <Image
                  src={"/logos/logo5.png"}
                  unoptimized
                  alt="com"
                  width={100}
                  height={100}
                />
              </li>
              <li>
                <Image
                  src={"/logos/logo2.png"}
                  unoptimized
                  alt="com"
                  width={100}
                  className="bg-black p-2 rounded-sm"
                  height={100}
                />
              </li>
              <li>
                <Image
                  src={"/logos/logo3.png"}
                  alt="com"
                  className="bg-black p-2 rounded-sm"
                  unoptimized
                  width={100}
                  height={100}
                />
              </li>
            </ul>
          </div>
          <div className=" flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={"/products"} className={buttonVariants()}>
              Browse Trending
            </Link>
            <Link
              href={"https://wa.me/message/KZYCFDFL3N6NA1?src=qr"}
              className={buttonVariants({ variant: "ghost" })}
            >
              Get started now
            </Link>
          </div>
        </div>

        {/* TODO: List products */}
        <ProductReel
          title="Web services"
          subTitle="Customized web development"
          href="/products"
          key={"hii"}
          link="Shop the collection"
        />
        <ProductReel
          smm
          title="Social media marketing"
          href="/products"
          subTitle="Engaging posts, graphics, and multimedia content for various platforms"
          key={"hiillo"}
          link="Shop the collections"
        />
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className=" md:flex-shrink-0 flex justify-center">
                  <div className=" h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    <perk.Icon className=" w-1/3 h-1/3" />
                  </div>
                </div>
                <div className=" mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className=" text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className=" mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
