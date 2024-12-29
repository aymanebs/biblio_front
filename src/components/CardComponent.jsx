import { Card } from "flowbite-react";

export function CardComponent() {
  return (
    <a
      href="/book-details" // Replace with your actual book details URL
      className="group relative block max-w-[10rem] hover:scale-105 transition-transform rounded-lg"
    >
      {/* Stars positioned above the cover */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className="h-4 w-4 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        {/* <span className="text-xs font-semibold text-gray-800 dark:text-gray-300">5.0</span> */}
      </div>

      {/* Book cover with rounded corners */}
      <Card
        className="p-0 h-[14rem] w-[10rem] rounded-lg overflow-hidden"
        imgAlt="Book Cover"
        imgSrc="https://via.placeholder.com/150x220.png?text=Book+Cover"
      />
    </a>
  );
}
