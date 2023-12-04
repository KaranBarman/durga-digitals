import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Breadcrumbs from "@/components/breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Check, HelpCircle, Minus } from "lucide-react";
import Link from "next/link";

const page = () => {
  const pricingItems = [
    {
      plan: "Pro",
      tagline: "Social media marketing",
      quota: 15,
      price: 10000,
      features: [
        {
          text: "15 creative posts",
          footnote: "The maximum amount of marketing posts per month.",
        },
        {
          text: "Instagram marketing",
          footnote:
            "Leverage Instagram's visual appeal for showcasing products and services.",
        },
        {
          text: "Facebook marketing",
          footnote:
            "Reach specific customer segments based on their demographics, behavior, and interests.",
        },
        {
          text: "Customized website",
          footnote: "Propel your brand into the digital frontier",
          negative: true,
        },
        {
          text: "Higher-quality responses",
          footnote: "Better algorithmic responses for enhanced content quality",
          negative: true,
        },
        {
          text: "Priority support",
          negative: true,
        },
      ],
    },
    {
      plan: "Enterprise",
      tagline: "For larger projects with higher needs.",
      price: 25000,
      quota: 20,
      features: [
        {
          text: "15 creative posts",
          footnote: "The maximum amount of marketing posts per month.",
        },
        {
          text: "Instagram marketing",
          footnote:
            "Leverage Instagram's visual appeal for showcasing products and services.",
        },
        {
          text: "Facebook marketing",
          footnote:
            "Reach specific customer segments based on their demographics, behavior, and interests.",
        },
        {
          text: "Customized website",
          footnote: "Propel your brand into the digital frontier",
          negative: false,
        },

        {
          text: "Higher-quality responses",
          footnote: "Better algorithmic responses for enhanced content quality",
          negative: false,
        },
        {
          text: "Priority support",
          negative: false,
        },
      ],
    },
  ];
  return (
    <>
      <MaxWidthWrapper className="mb-8 mt-24 max-w-5xl">
        <Breadcrumbs />
        <div className=" text-center">
          <div className=" mx-auto mb-10 sm:max-w-lg">
            <h1 className=" text-6xl font-bold sm:text-7xl">Pricing</h1>
            <p className=" mt-5 text-gray-600 sm:text-lg">
              Wheather you&apos;re just trying out our service or need more
              we&apos;ve got you covered
            </p>
          </div>
          <div className=" pt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <TooltipProvider>
              {pricingItems.map((item) => (
                <div
                  key={item.plan}
                  className={cn("relative rounded-2xl bg-white shadow-lg", {
                    "border-2 border-blue-600 shadow-blue-200":
                      item.plan === "Enterprise",
                    "border border-gray-200": item.plan !== "Enterprise",
                  })}
                >
                  {item.plan === "Enterprise" && (
                    <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm font-medium text-white">
                      Buy now
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="my-3 text-center font-display text-3xl font-bold">
                      {item.plan}
                    </h3>
                    <p className="text-gray-500">{item.tagline}</p>
                    <p className="my-5 font-display text-6xl font-semibold">
                      ₹{item.price}
                    </p>
                    <p className="text-gray-500">per month</p>
                  </div>
                  <div className="flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50">
                    <div className="flex items-center space-x-1">
                      <p>
                        {item.quota.toLocaleString()} Creative posts/mo included
                      </p>
                      <Tooltip delayDuration={300}>
                        <TooltipTrigger className="cursor-default ml-1.5">
                          <HelpCircle className="h-4 w-4 text-zinc-500" />
                        </TooltipTrigger>
                        <TooltipContent className="w-80 p-2">
                          How many creative posts you&apos;ll get per month.
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>

                  <ul className="my-10 space-y-5 px-8">
                    {item.features.map((item) => (
                      <li key={item.text} className="flex space-x-5">
                        <div className="flex-shrink-0">
                          {item.negative ? (
                            <Minus className="h-6 w-6 text-gray-300" />
                          ) : (
                            <Check className="h-6 w-6 text-blue-500" />
                          )}
                        </div>
                        {item.footnote ? (
                          <div className="flex items-center space-x-1">
                            <p
                              className={cn("text-gray-600", {
                                "text-gray-400": item.negative,
                              })}
                            >
                              {item.text}
                            </p>
                            <Tooltip delayDuration={300}>
                              <TooltipTrigger className="cursor-default ml-1.5">
                                <HelpCircle className="h-4 w-4 text-zinc-500" />
                              </TooltipTrigger>
                              <TooltipContent className="w-80 p-2">
                                {item.footnote}
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        ) : (
                          <p
                            className={cn("text-gray-600", {
                              "text-gray-400": item.negative,
                            })}
                          >
                            {item.text}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className=" border-t border-gray-200">
                    <div className=" p-5">
                      <Link
                        href={"https://wa.me/message/KZYCFDFL3N6NA1?src=qr"}
                        className={buttonVariants({ className: "w-full" })}
                      >
                        Contact us
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </TooltipProvider>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default page;
