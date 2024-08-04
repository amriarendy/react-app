export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

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
