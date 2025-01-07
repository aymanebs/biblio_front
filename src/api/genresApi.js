import apiClient from "../config/axios";

// Get all genres
export const getAllGenres = async () => {
  try {
    const response = await apiClient.get('/genres');
    return response.data;
  } catch (error) {
    console.log('Failed to fetch genres', error);
  }
};

// Create a new genre
export const createGenre = async (genreData) => {
  try {
    await apiClient.post('/genres', genreData);
  } catch (error) {
    console.log('Failed to create genre', error);
  }
};

// Get a genre by its ID
export const getGenreById = async (genreId) => {
  try {
    const response = await apiClient.get(`/genres/${genreId}`);
    return response.data;
  } catch (error) {
    console.log('Failed to fetch genre by ID', error);
  }
};

// Update a genre
export const updateGenre = async (genreId, genreData) => {
  try {
    await apiClient.put(`/genres/${genreId}`, genreData);
  } catch (error) {
    console.log('Failed to update genre', error);
  }
};

// Delete a genre
export const deleteGenre = async (genreId) => {
  try {
    await apiClient.delete(`/genres/${genreId}`);
  } catch (error) {
    console.log('Failed to delete genre', error);
  }
};
