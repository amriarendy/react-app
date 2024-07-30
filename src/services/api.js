const BASE_URL = "http://localhost:5000";

export const SERVER_API = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};
