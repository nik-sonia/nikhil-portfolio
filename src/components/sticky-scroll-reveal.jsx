import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { ExternalLink } from "lucide-react";
const content = [
  {
    title: "Indian Restaurant Website",
    description:
      "A fully responsive and modern website for an Indian restaurant, featuring online table reservations, a dynamic menu, gallery, and contact form. Built with React and Tailwind CSS, it provides an engaging user experience and easy management for restaurant staff.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="/images/restaurant.png"
          width={600}
          height={600}
          className=" h-full w-fullobject-cover"
          alt="linear board demo"
        />
       
      </div>
      
    ),
    link:(
      <a
      href="https://indiecurryhaus.de/" // 🔗 replace with your real link
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white text-emerald-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
    >
      <ExternalLink size={18} />
      View Project
    </a>
    )
  },
  {
    title: "My Portfoglio Website",
    description:
      "A personal portfolio website built with React, Tailwind CSS, and Framer Motion to showcase my projects, skills, and experience. It features smooth animations, responsive design, and an interactive contact form, providing a modern and engaging way for visitors to explore my work.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/images/portfolio.png"
          width={600}
          height={600}
          className=" h-full w-fullobject-cover"
          alt="linear board demo"
        />
      </div>
    ),
    link:(
      <a
      href="" // 🔗 replace with your real link
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white text-emerald-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
    >
      <ExternalLink size={18} />
      View Project
    </a>
    )
  },
  {
    title: "Business Landing Page",
    description:
      "A modern, mobile-first landing page designed for a client project, built with React and Tailwind CSS. It features interactive animations, a clean layout, and clear calls-to-action to engage visitors and drive conversions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <img
          src="/images/business.png"
          width={600}
          height={600}
          className=" h-full w-fullobject-cover"
          alt="linear board demo"
        />
      </div>
    ),
    link:(
      <a
      href="https://indiecurryhaushaag.de" // 🔗 replace with your real link
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white text-emerald-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
    >
      <ExternalLink size={18} />
      View Project
    </a>
    )
  },
  {
    title: "E-commerce Website",
    description:
      "A fully functional e-commerce website built with React, Tailwind CSS, and Node.js/Express for the backend. Features include product listing, shopping cart, search and filter options, and a smooth checkout process, providing a seamless shopping experience for users.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="/images/ecommerce.png"
          width={600}
          height={600}
          className=" h-full w-fullobject-cover"
          alt="linear board demo"
        />
      </div>
    ),
    link:(
      <a
      href="https://your-restaurant-demo-link.com" // 🔗 replace with your real link
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white text-emerald-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
    >
      <ExternalLink size={18} />
      View Project
    </a>
    )
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
