import React from "react";

const data = [
  {
    name: "Local Expertise, Global Impact: ",
    detail:
      "Based in Jaipur, we understand the pulse of the local market while crafting strategies that resonate globally.",
  },
  {
    name: "Holistic Digital Approach: ",
    detail:
      "Our integrated SMM and Web Development services provide a comprehensive solution for a digital transformation journey.",
  },
  {
    name: "Innovation at Every Step: ",
    detail:
      "We stay ahead of industry trends, infusing creativity and innovation into every project.",
  },
  {
    name: "Client-Centric Philosophy: ",
    detail:
      "Your success is our success. We are committed to understanding your unique needs and exceeding your expectations.",
  },
];
const data2 = [
  {
    name: "",
    detail:
      "As your trusted digital partner, we specialize in crafting powerful Social Media Marketing strategies that elevate brand visibility, engage audiences, and drive meaningful results. Whether you seek to create a buzz on Facebook, captivate on Instagram, or harness the full potential of other platforms, our tailored SMM services are designed to meet your unique goals.",
  },
];

interface WhyProps {
  children: React.ReactNode;
  subtitle?: string;
}

const Why = ({ children, subtitle }: WhyProps) => {
  const use = subtitle === "smm" ? data : data2;
  return (
    <div className=" max-w-2xl py-10 px-4 lg:max-w-4xl lg:px-0">
      {children}
      <p className=" hidden">{subtitle}</p>
      {use.map((item) => (
        <p
          key={item.name}
          className=" text-left text-lg text-muted-foreground mt-3"
        >
          {item.name && (
            <span className=" font-bold text-gray-800">{item.name}</span>
          )}
          {item.detail}
        </p>
      ))}
    </div>
  );
};

export default Why;
