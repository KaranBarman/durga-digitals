import Link from "next/link";
import Card from "./Card";

interface ProductReelProps {
  title: string;
  subTitle?: string;
  href?: string;
  smm?: boolean;
  link?: string;
}

const ProductReel = (props: ProductReelProps) => {
  const { title, subTitle, href, link, smm } = props;
  return (
    <section className=" py-12">
      <div className="md:flex md:items-center md:justify-between mb-4">
        <div className=" max-w-2xl px-4 lg:max-w-4xl lg:px-0">
          {title ? (
            <h1 className=" text-2xl font-bold text-gray-900 sm:text-3xl">
              {title}
            </h1>
          ) : null}{" "}
          {subTitle ? (
            <p className=" text-sm mt-2 text-muted-foreground">{subTitle}</p>
          ) : null}
        </div>
        {href ? (
          <Link
            href={href}
            className=" hidden text-sm font-medium text-blue-600 hover:text-blue-500 md:block"
          >
            {link} <span aria-hidden="true">&rarr;</span>
          </Link>
        ) : null}
      </div>

      <div className=" relative">
        <div className="mt-6 flex items-center w-full">
          <div id="cards">
            {smm ? (
              <>
                <Card
                  name="Basic Plan - Essential Social Boost"
                  label="Social media marketing"
                  price={7000}
                  urls={["/smm/smm-1.jpg", "/smm/smm-2.jpg", "/smm/smm-3.jpg"]}
                  href="4"
                />
                <Card
                  name="Pro Plan - Premium Engagement Suite"
                  label="Social media marketing"
                  price={10000}
                  urls={["/smm/smm-4.jpg", "/smm/smm-5.jpg", "/smm/smm-6.jpg"]}
                  href="5"
                />
                <Card
                  name="Enterprise Plan - Strategic Social Dominance"
                  label="Social media marketing"
                  price={14000}
                  urls={["/smm/smm-7.jpg", "/smm/smm-8.jpg", "/smm/smm-9.jpg"]}
                  href="6"
                />
              </>
            ) : (
              <>
                <Card
                  name="Ecommerce website"
                  label="Customized web development"
                  price={20000}
                  urls={[
                    "/ecommerce/web-1.jpg",
                    "/ecommerce/web-2.jpg",
                    "/ecommerce/web-3.jpg",
                  ]}
                  href="1"
                />
                <Card
                  name="Restaurant website"
                  label="Customized web development"
                  price={14000}
                  urls={[
                    "/restaurant/res-1.jpg",
                    "/restaurant/res-2.jpg",
                    "/restaurant/res-3.jpg",
                  ]}
                  href="2"
                />
                <Card
                  name="Hotel website"
                  label="Customized web development"
                  price={15000}
                  urls={[
                    "/hotel/htl-1.jpg",
                    "/hotel/htl-2.jpg",
                    "/hotel/htl-3.jpg",
                  ]}
                  href="3"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReel;
