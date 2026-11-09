import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <div className="pb-40">
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl md:text-6xl">
            My <span className="text-neutral-400">Services</span>
          </h2>
        </div>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="fast"
        />
      </div>
    </>
  );
}

const testimonials = [
  {
    quote: "Modern responsive websites for small businesses.",

    title: "Business Websites",
  },
  {
    title: "Landing Pages",
    quote:
      "High-converting landing pages for products, services and campaigns.",

    
  },
  {
    quote: "Modern frontend applications built with React.",
    title: "React Development",
  },
  {
    quote: "Fix responsive issues, UI problems and frontend bugs.",

    title: "Website Improvements",
  },
  {
    quote: "Connect websites and applications with external APIs.",

    title: "API Integration",
  },
];
