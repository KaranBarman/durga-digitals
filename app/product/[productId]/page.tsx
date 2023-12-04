import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { data } from "../Data";
import { cn, formatPrice } from "@/lib/utils";
import { Check } from "lucide-react";
import ImageSlider from "@/components/ImageSlider";
import ProductReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import Breadcrumbs from "@/components/breadcrumbs";

interface PageProps {
  params: {
    productId: string;
  };
}

const page = ({ params }: PageProps) => {
  return (
    <MaxWidthWrapper className=" bg-white mt-7">
      <div className=" bg-white">
        <div className=" mx-auto max-w-2xl px-4 gap-y-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className=" lg:max-w-lg lg:self-end">
            <Breadcrumbs />
            {data.map((doc) =>
              doc.href === params.productId ? (
                <>
                  <div className="mt-4" key={doc.href}>
                    <h1 className=" text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {doc.name}
                    </h1>
                  </div>
                  <section className=" mt-4">
                    <div className=" flex items-center">
                      <p className=" font-medium text-gray-900">
                        {formatPrice(doc.price)}
                      </p>
                      <div className=" ml-4 border-l text-muted-foreground border-gray-300 pl-4">
                        {doc.label}
                      </div>
                    </div>
                    <div className=" mt-4 space-y-6">
                      <p className=" text-base text-muted-foreground">
                        {doc.description}
                      </p>
                    </div>
                    {doc.perks?.map((item, i) => (
                      <div key={i} className=" mt-6 flex items-center">
                        <Check
                          aria-hidden="true"
                          className=" h-5 w-5 flex-shrink-0 text-green-500"
                        />

                        <p className="ml-2 text-sm text-muted-foreground">
                          {item}
                        </p>
                      </div>
                    ))}
                  </section>
                </>
              ) : null
            )}
          </div>

          <div className=" mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
            <div className=" aspect-square rounded-lg">
              {data.map((doc) =>
                doc.href === params.productId ? (
                  <ImageSlider urls={doc.urls} key={doc.price} />
                ) : null
              )}
            </div>
          </div>
          <div className="lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
            <div className="mt-5">
              <Link
                href={"https://wa.me/message/KZYCFDFL3N6NA1?src=qr"}
                className={cn(buttonVariants(), "w-full")}
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
