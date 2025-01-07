import apiClient from "../config/axios";

// Get all books
export const getAllBooks = async () => {
  try {
    const response = await apiClient.get('/books');
    return response.data;
  } catch (error) {
    console.log('Failed to fetch books', error);
  }
};

// Create a new book
export const createBook = async (bookData) => {
  try {
    await apiClient.post('/books', bookData);
  } catch (error) {
    console.log('Failed to create book', error);
  }
};

// Get a book by its ID
export const getBookById = async (bookId) => {
  try {
    const response = await apiClient.get(`/books/${bookId}`);
    return response.data;
  } catch (error) {
    console.log('Failed to fetch book by ID', error);
  }
};

// Update a book
export const updateBook = async (bookId, bookData) => {
  try {
    await apiClient.put(`/books/${bookId}`, bookData);
  } catch (error) {
    console.log('Failed to update book', error);
  }
};

// Delete a book
export const deleteBook = async (bookId) => {
  try {
    await apiClient.delete(`/books/${bookId}`);
  } catch (error) {
    console.log('Failed to delete book', error);
  }
};
