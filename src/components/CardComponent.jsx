
"use client";

import { Card } from "flowbite-react";

export function CardComponent() {
  return (
    <Card
  className="max-w-[14rem] p-2"
  imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
  imgSrc="/images/products/apple-watch.png"
>
  <a href="#">
    <h5 className="text-sm font-normal tracking-tight text-gray-600 dark:text-white">
      Apple Watch Series 7 GPS
    </h5>
  </a>
  <div className="mb-3 mt-1 flex items-center">
    <svg
      className="h-3 w-3 text-yellow-300"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
    <svg
      className="h-3 w-3 text-yellow-300"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
    <span className="ml-2 rounded bg-cyan-100 px-1 py-0.5 text-[10px] font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
      5.0
    </span>
  </div>
  <div className="flex items-center justify-between">
    <a
      href="#"
      className="rounded bg-cyan-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-400"
    >
      Rent
    </a>
  </div>
</Card>


  );
}
