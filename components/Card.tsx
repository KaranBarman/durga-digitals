import React from "react";
import ImageSlider from "./ImageSlider";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

interface CardProps {
  name: string;
  label: string;
  urls: string[];
  price: number;
  href: string;
}

const Card = ({ name, label, urls, price, href }: CardProps) => {
  return (
    <div>
      <Link href={`/product/${href}`}>
        <div key={name} className="py-4 flex flex-col w-full">
          <ImageSlider urls={urls} />
          <h3 className=" mt-4 font-medium text-sm text-gray-700">{name}</h3>
          <p className=" mt-1 text-sm text-gray-500">{label}</p>
          <p className="mt-1 font-medium text-sm text-gray-900">
            {formatPrice(price)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
