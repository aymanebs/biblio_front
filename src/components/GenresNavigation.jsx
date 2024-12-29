
const categories = [
  "Biography", "Business", "Children", "Fantasy", "Fiction",
  "History", "Literature", "Mystery", "Nonfiction", "Religion",
  "Romance", "Science Fiction", "Suspense", "Technology", "Thriller",
  "Travel", "Young Adult"
];

const GenresNavigation = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 rounded-full bg-white border border-blue-200 text-blue-600 
                     hover:bg-blue-50 transition-colors duration-200 text-sm font-medium
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenresNavigation;