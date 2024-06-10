"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/utils/cn";
import Image from "next/image";
export function Projects() {
  return (
    <div className='h-[15rem] px-4 pt-8 mb-20 pb-64 flex flex-col items-center justify-center w-full'>
      <h1 className='font-bold text-3xl mb-12 relative z-50 text-center'>
        PROJECTS
      </h1>
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}>
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Hoodies eShop",
    designation: "An eCommerce application",
    content: (
      <Image
        alt=''
        priority
        width={200}
        height={150}
        src='/e-comm.webp'
        className='w-full aspect-video rounded-3xl'
      />
    ),
  },
  {
    id: 1,
    name: "Food Delivery",
    designation: "A delivery application",
    content: (
      <Image
        alt=''
        priority
        width={200}
        height={150}
        src='/food-delivery.jpeg'
        className='w-full aspect-video rounded-3xl'
      />
    ),
  },
  {
    id: 2,
    name: "Hulu",
    designation: "An online film streaming app",
    content: (
      <Image
        alt=''
        priority
        width={200}
        height={150}
        src='/hulu.webp'
        className='w-full aspect-video rounded-3xl'
      />
    ),
  },
  {
    id: 3,
    name: "Photo Gallery",
    designation: "A photo studio gallery app",
    content: (
      <Image
        alt=''
        priority
        width={200}
        height={150}
        src='/photo-studio.webp'
        className='w-full aspect-video rounded-3xl'
      />
    ),
  },
];
