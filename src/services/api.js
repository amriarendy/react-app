const BASE_URL = "http://localhost:3001"; // Corrected the URL

export const SERVER_API = async (endpoint, options = {}) => {
  try {
    const url = `${BASE_URL}${endpoint}`;
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`API call error: ${response.status} - ${errorMessage}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`API call failed: ${error.message}`);
    throw error;
  }
};
