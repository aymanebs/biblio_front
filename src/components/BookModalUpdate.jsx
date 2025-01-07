import React, { useState, useEffect } from "react";

const genres = [
    { icon: "📖", name: "Fiction" },
    { icon: "📘", name: "Non-Fiction" },
    { icon: "❓", name: "Mystery" },
    { icon: "❤️", name: "Self-Help" },
    { icon: "💌", name: "Romance" },
    { icon: "🚀", name: "Science Fiction" },
    { icon: "✨", name: "Fantasy" },
    { icon: "🔒", name: "Thriller" },
    { icon: "👁️", name: "Biography" },
    { icon: "📜", name: "History" },
  ];

export const BookModalUpdate = ({ isOpen, onClose, onSave, book }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    price: "",
    genre: "",
    cover: null,
  });

 

  useEffect(() => {
    if (book) {
      setFormData({
        title: book.title || "",
        description: book.description || "",
        author: book.author || "",
        price: book.price || "",
        cover: null,
      });
    }
  }, [book]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Update Book</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={formData.author}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <select
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="">Select Genre</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre.name}>
                {genre.icon} {genre.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
