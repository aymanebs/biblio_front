import { BreadCrumbComponent } from "../components/BreadCrumbComponent";
import { HiHome } from "react-icons/hi";
import CollectionBanner from "../components/CollectionBanner";
import { CardComponent } from "../components/CardComponent";

const breadItems = [
  { name: "Home", link: "/dashboard", icon: HiHome },
  { name: "Collections", link: "/collections" },
];

export const Collections = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <BreadCrumbComponent items={breadItems} />
      {/* Banner Section */}
      <CollectionBanner />

      <div className="px-4 py-8 lg:px-16">
        {/* Section Title */}
        <div className="relative flex justify-center mt-8">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
          <span className="relative z-10 bg-white px-6 text-lg font-semibold">
            Featured Collections
          </span>
        </div>

        {/* Featured Collections */}
        <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-2 lg:gap-8">
          {/* First Collection Group */}
          <div className="rounded-lg bg-[#ffb0892d] p-4">
            {/* Collection Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Collection 1</h2>
              <a
                href="/collections/1"
                className="text-sm font-medium text-cyan-600 hover:underline"
              >
                See All Books
              </a>
            </div>

            {/* Collection Cards */}
            <div className="flex flex-wrap gap-4">
              <CardComponent />
              <CardComponent />
              <CardComponent />
            </div>
          </div>

          {/* Second Collection Group */}
          <div className="rounded-lg bg-[#ffb0892d] p-4">
            {/* Collection Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Collection 2</h2>
              <a
                href="/collections/2"
                className="text-sm font-medium text-cyan-600 hover:underline"
              >
                See All Books
              </a>
            </div>

            {/* Collection Cards */}
            <div className="flex flex-wrap gap-4">
              <CardComponent />
              <CardComponent />
              <CardComponent />
            </div>
          </div>
        </div>

        {/* Book of the Day Section */}
        <div className="mt-12 bg-gradient-to-r from-yellow-300 to-orange-500 rounded-lg p-8 shadow-lg">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Book of the Day</h2>
            <p className="mb-6 text-lg">
              Discover our featured book that will inspire you today.
            </p>

            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div className="lg:w-1/3 mb-6 lg:mb-0">
                <img
                  src="/path/to/book-cover.jpg" // Replace with the actual book cover image URL
                  alt="Book of the Day"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>

              <div className="lg:w-2/3 lg:pl-8 text-center lg:text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  The Great Adventure
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  An epic journey through mystical lands filled with wonder,
                  danger, and unexpected friendships.
                </p>
                <a
                  href="/book-of-the-day"
                  className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat Featured Collections for more */}
        {/* Additional Collection Groups can be added here */}

           {/* Featured Collections */}
         <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-2 lg:gap-8">
          {/* First Collection Group */}
          <div className="rounded-lg bg-[#ffb0892d] p-4">
            {/* Collection Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Collection 1</h2>
              <a
                href="/collections/1"
                className="text-sm font-medium text-cyan-600 hover:underline"
              >
                See All Books
              </a>
            </div>

            {/* Collection Cards */}
            <div className="flex flex-wrap gap-4">
              <CardComponent />
              <CardComponent />
              <CardComponent />
            </div>
          </div>

          {/* Second Collection Group */}
          <div className="rounded-lg bg-[#ffb0892d] p-4">
            {/* Collection Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Collection 2</h2>
              <a
                href="/collections/2"
                className="text-sm font-medium text-cyan-600 hover:underline"
              >
                See All Books
              </a>
            </div>

            {/* Collection Cards */}
            <div className="flex flex-wrap gap-4">
              <CardComponent />
              <CardComponent />
              <CardComponent />
            </div>
          </div>
          
        </div>

             {/* Featured Collections */}
             <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-2 lg:gap-8">
          {/* First Collection Group */}
          <div className="rounded-lg bg-[#ffb0892d] p-4">
            {/* Collection Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Collection 1</h2>
              <a
                href="/collections/1"
                className="text-sm font-medium text-cyan-600 hover:underline"
              >
                See All Books
              </a>
            </div>

            {/* Collection Cards */}
            <div className="flex flex-wrap gap-4">
              <CardComponent />
              <CardComponent />
              <CardComponent />
            </div>
          </div>

          {/* Second Collection Group */}
          <div className="rounded-lg bg-[#ffb0892d] p-4">
            {/* Collection Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Collection 2</h2>
              <a
                href="/collections/2"
                className="text-sm font-medium text-cyan-600 hover:underline"
              >
                See All Books
              </a>
            </div>

            {/* Collection Cards */}
            <div className="flex flex-wrap gap-4">
              <CardComponent />
              <CardComponent />
              <CardComponent />
            </div>
          </div>
          
        </div>
      </div>

      {/* Call to action section */}

      <div className="mt-16 bg-gradient-to-r from-amber-500/95 to-rose-500/95 py-16">
        <div className="max-w-3xl mx-auto text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with Our Latest Collections</h3>
            <p className="text-lg mb-8">Subscribe to our newsletter and receive exclusive book recommendations and offers directly in your inbox.</p>

            <div className="flex justify-center items-center">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full max-w-md px-4 py-2 text-lg text-gray-800 bg-white rounded-l-md focus:outline-none focus:ring-0 focus:border-cyan-500 transition duration-300"
                />
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold px-6 py-2 text-lg rounded-r-md hover:from-yellow-500 hover:to-yellow-600 transition duration-300 transform hover:scale-105">
                    Subscribe
                </button>
            </div>




        </div>
      </div>

    </>
  );
};
