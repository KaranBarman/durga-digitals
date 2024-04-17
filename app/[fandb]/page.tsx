import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { smm, webdev } from "./data";
import { Facebook, Instagram, Medal } from "lucide-react";
import List from "./list";

interface PageProps {
  params: {
    fandb: string;
  };
}

const page = ({ params }: PageProps) => {
  const data = params.fandb === "smm" ? smm : webdev;
  return (
    <MaxWidthWrapper>
      <div className=" py-20 mx-auto text-center flex flex-col items-center">
        <h1 className=" max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">
          {params.fandb === "smm"
            ? "Social Media Marketing (SMM) Benefits and Features"
            : "Customized websites Benefits and Features"}
        </h1>
        {data.map((item, i) => (
          <div key={i} className=" text-left mr-auto flex flex-col mt-20 gap-6">
            <h2 className="text-xl font-bold tracking-tight text-emerald-900 bg-emerald-100 w-[550px] p-4 sm:text-3xl flex items-center gap-4  rounded-md">
              {item.name === "Instagram marketing" ? (
                <Instagram />
              ) : item.name === "Facebook marketing" ? (
                <Facebook />
              ) : (
                <Medal />
              )}
              {item.name}
            </h2>
            <ol className=" flex flex-col gap-1">
              <List>Customer Pain Point: {item.customer_pain_point}</List>
              <List>Advantage: {item.advantage}</List>
              <List>Differentiator: {item.differentiator}</List>
            </ol>
          </div>
        ))}

        <p className=" text-lg mt-8 text-gray-600">
          {params.fandb === "smm"
            ? "In conclusion, our comprehensive Social Media Marketing suite not only addresses common pain points but excels in providing innovative features. From detailed analytics to seamless cross-platform integration, we stand out through user-friendly interfaces and cutting-edge AI technology. Our numerous testimonials and industry awards underscore our commitment to excellence, ensuring that your brand's social media presence is not only effective but also trustworthy and credible. Embrace the future of digital marketing with us, where creativity meets precision."
            : "Transform your online presence with our website solutions – where responsive design meets user-friendly navigation, SEO optimization drives visibility, engaging content captures attention, and e-commerce integration fuels business growth. Our commitment to security, coupled with accolades and certifications, positions us as a trusted partner in your digital journey. Join the ranks of satisfied clients who have experienced the impact of our innovative and award-winning approach. Elevate your online presence with a website that not only meets but exceeds expectations"}
        </p>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
