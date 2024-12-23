import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Book, BookOpen, BookMarked, BookUp, Bookmark, BookDown, BookKey, BookLock, BookPlus, BookTemplate, Wand, CircleHelp, HeartHandshake, BookHeart, Rocket, ScanEye } from 'lucide-react';

const genres = [
  { icon: Book, name: 'Fiction' },
  { icon: BookOpen, name: 'Non-Fiction' },
  { icon: CircleHelp, name: 'Mystery' },
  { icon: HeartHandshake, name: 'Self-Help' },
  { icon: BookHeart, name: 'Romance' },
  { icon: Rocket, name: 'Science Fiction' },
  { icon: Wand, name: 'Fantasy' },
  { icon: BookLock, name: 'Thriller' },
  { icon: ScanEye, name: 'Biography' },
  { icon: BookTemplate, name: 'History' },
];

const GenresCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 5; 

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= genres.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? genres.length - itemsToShow : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8">
      <div className="overflow-hidden px-12">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
          }}
        >
          {genres.map((genre, index) => {
            const Icon = genre.icon;
            return (
              <div
                key={index}
                className="flex-none w-1/5 px-2"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg  hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                  <div className="p-3 rounded-full bg-white transition-colors duration-300">
                    <Icon className="w-8 h-8 text-red-600" />
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-700">
                    {genre.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
};

export default GenresCarousel;