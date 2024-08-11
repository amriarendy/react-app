export const imageCheck = async (imageUrl) => {
  try {
    const response = await fetch(imageUrl, { method: "HEAD" });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error fetching image:", error);
  }
};
