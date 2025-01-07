import React, { useState, useEffect } from "react";
import { CardComponent } from "../components/CardComponent";
import { getAllBooks } from "../api/bookApi";  // Ensure you import your API function

export const BookCollectionPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [books, setBooks] = useState([]);  // Ensure this is an empty array initially
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);  // Error state

  // Fetch books from API
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);  // Reset error before new fetch
      try {
        const fetchedBooks = await getAllBooks(); // Replace with your actual fetch logic
        // Ensure fetchedBooks is always an array
        setBooks(Array.isArray(fetchedBooks) ? fetchedBooks : []);
      } catch (error) {
        setError("Failed to fetch books. Please try again later.");
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);  

  // Filter books based on search term and filter selection
  const filteredBooks = books.filter((book) => {
    const matchesSearchTerm = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || book.genre === filter;
    return matchesSearchTerm && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-100">
      <div className="container mx-auto px-6 py-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Explore Our Book Collection
          </h1>
          <p className="text-lg text-gray-600">
            Find the best books tailored to your taste. Use the search and
            filters to narrow down your choices.
          </p>
        </header>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full md:w-1/5 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="all">All</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="fantasy">Fantasy</option>
          </select>
        </div>

        {/* Loading Indicator */}
        {loading && <div className="text-center text-gray-600 mt-4">Loading books...</div>}

        {/* Error Message */}
        {error && <div className="text-center text-red-600 mt-4">{error}</div>}

        {/* Book Grid */}
        {books.length === 0 && !loading && !error ? (
          <p className="col-span-full text-center text-gray-600 mt-6">
            No books available at the moment. Please check back later.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => <CardComponent key={book.id} book={book} />) 
            ) : (
              <p className="col-span-full text-center text-gray-600">
                No books found. Try adjusting your search or filters.
              </p>
            )}
          </div>
          
        )}
      </div>
    </div>
  );
};
