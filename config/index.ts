export const PRODUCT_CATEGORIES = [
  {
    label: "Social media marketing",
    value: "smm" as const,
    features: [
      {
        name: "Basic Plan - Essential Social Boost",
        tagline:
          "Customized social media strategy creation tailored to client goals",
        href: "/product/4",
        imageSrc: "/smm/smm-8.jpg",
        price: 10000,
        images: [
          {
            url: "/smm/smm-1.jpg",
          },
          {
            url: "/smm/smm-2.jpg",
          },
          {
            url: "/smm/smm-3.jpg",
          },
        ],
      },
      {
        name: "Pro Plan - Premium Engagement Suite",
        tagline:
          "Engaging posts, graphics, and multimedia content for various platforms",
        href: "/product/5",
        imageSrc: "/smm/smm-2.jpg",
        images: [
          {
            url: "/smm/smm-1.jpg",
          },
          {
            url: "/smm/smm-2.jpg",
          },
          {
            url: "/smm/smm-3.jpg",
          },
        ],
        price: 10000,
      },
      {
        name: "Enterprise Plan - Strategic Social Dominance",
        tagline:
          "Building and maintaining a vibrant online community for the brand",
        href: "/product/6",
        imageSrc: "/smm/smm-3.jpg",
        images: [
          {
            url: "/web/web-1.jpg",
          },
          {
            url: "/web/web-2.jpg",
          },
          {
            url: "/web/web-3.jpg",
          },
        ],
        price: 10000,
      },
    ],
  },
  {
    label: "Customized web development",
    value: "webdev" as const,
    features: [
      {
        name: "Ecommerce",
        href: "/product/1",
        tagline:
          "Empower Your Business, Elevate Your Sales: Your Online Store, Your Success",
        imageSrc: "/nav/web/web-1.jpg",
        images: [
          {
            url: "/nav/smm/smm-1.jpg",
          },
          {
            url: "/nav/smm/smm-2.jpg",
          },
          {
            url: "/nav/smm/smm-3.jpg",
          },
        ],
        price: 10000,
      },
      {
        name: "Restaurant",
        href: "/product/2",
        tagline: "Elevate your hotel's online presence and guest experience",
        imageSrc: "/nav/web/web-2.jpg",
        images: [
          {
            url: "/nav/smm/smm-1.jpg",
          },
          {
            url: "/nav/smm/smm-2.jpg",
          },
          {
            url: "/nav/smm/smm-3.jpg",
          },
        ],
        price: 10000,
      },
      {
        name: "Hotel",
        href: "/product/3",
        tagline:
          "Check-in to Success: Your Hotel's Gateway to Unforgettable Stays",
        imageSrc: "/nav/web/web-3.jpg",
        images: [
          {
            url: "/nav/smm/smm-1.jpg",
          },
          {
            url: "/nav/smm/smm-2.jpg",
          },
          {
            url: "/nav/smm/smm-3.jpg",
          },
        ],
        price: 10000,
      },
    ],
  },
];
