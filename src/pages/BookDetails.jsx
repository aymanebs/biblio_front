import { Star, MapPin, Users } from 'lucide-react'; // Using Lucide icons for modern look

export const BookDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
        
        {/* Book Cover Section */}
        <div className="w-full lg:w-1/3 rounded-lg overflow-hidden shadow-xl bg-gradient-to-t from-gray-200 to-white">
          <img
            src="/path/to/book-cover.jpg" // Replace with actual book cover image URL
            alt="Book Cover"
            className="w-full h-auto object-cover transform hover:scale-105 transition duration-500"
          />
        </div>

        {/* Book Details Section */}
        <div className="w-full lg:w-2/3 space-y-8">
          {/* Book Title */}
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight hover:text-cyan-600 transition duration-300">
            The Great Adventure
          </h1>

          {/* Author Section */}
          <div className="flex items-center text-gray-700">
            <span className="text-xl font-medium">By</span>
            <span className="ml-2 text-xl font-semibold text-cyan-600">John Doe</span>
          </div>

          {/* Book Categories */}
          <div className="flex space-x-4 text-sm text-gray-500 mt-2">
            <span className="px-3 py-1 bg-cyan-100 text-cyan-600 rounded-md">Adventure</span>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-600 rounded-md">Fantasy</span>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-600 rounded-md">Fiction</span>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 mt-6">
            An epic journey through mystical lands filled with wonder, danger, and unexpected friendships. Follow the adventures of our hero as they uncover ancient secrets and battle fierce enemies to save the world.
          </p>

          {/* Rating Section */}
          <div className="mt-6 bg-gradient-to-r from-[#FFCF9D] to-[#FFECC8] rounded-lg p-6 shadow-lg">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-medium text-gray-800">Rating:</span>
              <div className="flex items-center">
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-gray-300" />
              </div>
            </div>
            <div className="flex justify-between mt-4 text-gray-700">
              <span className="text-lg">4.0 / 5.0</span>
              <span className="text-sm">200 reviews</span>
            </div>

            {/* Review Breakdown */}
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-12 bg-yellow-300 rounded-full"></div>
                  <span>5 stars</span>
                </div>
                <span>120 reviews</span>
              </div>
              <div className="flex justify-between text-sm">
                <div className="h-2 w-8 bg-yellow-400 rounded-full"></div>
                <span>4 stars</span>
                <span>50 reviews</span>
              </div>
              <div className="flex justify-between text-sm">
                <div className="h-2 w-5 bg-yellow-300 rounded-full"></div>
                <span>3 stars</span>
                <span>15 reviews</span>
              </div>
              <div className="flex justify-between text-sm">
                <div className="h-2 w-4 bg-yellow-200 rounded-full"></div>
                <span>2 stars</span>
                <span>10 reviews</span>
              </div>
              <div className="flex justify-between text-sm">
                <div className="h-2 w-3 bg-yellow-100 rounded-full"></div>
                <span>1 star</span>
                <span>5 reviews</span>
              </div>
            </div>
          </div>

          {/* Price Section */}
          <div className="flex items-center mt-6">
            <span className="text-2xl font-semibold text-gray-800 mr-6">$19.99</span>
            <span className="text-sm text-gray-500 line-through">$29.99</span>
          </div>

          {/* Book Availability */}
          <div className="flex items-center text-gray-600 mt-4">
            <MapPin className="text-cyan-600" />
            <span className="ml-2 text-lg">Available at Local Store</span>
          </div>

          {/* Rent Button */}
          <button className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-semibold px-8 py-3 rounded-md hover:from-cyan-700 hover:to-cyan-800 transition duration-300 transform hover:scale-105">
            Rent Now
          </button>

          {/* Separator */}
          <div className="my-8 border-t-2 border-gray-300"></div>

          {/* Book Availability */}
          <div className="flex items-center text-gray-600 mt-6">
            <Users className="text-cyan-600" />
            <span className="ml-2 text-lg">150 people rented this book</span>
          </div>
        </div>
      </div>

      {/* Related Books Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Related Book 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition duration-300">
            <img
              src="/path/to/related-book1.jpg"
              alt="Related Book 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Mystical Journey</h3>
              <p className="text-gray-600 text-sm mt-2">An exciting fantasy adventure in a magical world.</p>
              <div className="flex items-center mt-4">
                <Users className="text-gray-500 mr-2" />
                <span className="text-gray-600">150 people rented</span>
              </div>
            </div>
          </div>

          {/* Related Book 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition duration-300">
            <img
              src="/path/to/related-book2.jpg"
              alt="Related Book 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Epic Quest</h3>
              <p className="text-gray-600 text-sm mt-2">A thrilling journey filled with quests and challenges.</p>
              <div className="flex items-center mt-4">
                <Users className="text-gray-500 mr-2" />
                <span className="text-gray-600">200 people rented</span>
              </div>
            </div>
          </div>

          {/* Related Book 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition duration-300">
            <img
              src="/path/to/related-book3.jpg"
              alt="Related Book 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">The Lost World</h3>
              <p className="text-gray-600 text-sm mt-2">Discover an ancient world filled with mysteries.</p>
              <div className="flex items-center mt-4">
                <Users className="text-gray-500 mr-2" />
                <span className="text-gray-600">180 people rented</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
