import { Image } from "../components/ui/Image";

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const imageCheck = async (imageUrl) => {
  try {
    const response = await fetch(imageUrl, { method: 'HEAD' }); // Use HEAD method to only get headers

    if (response.ok) {
      console.log("Image Available:", response);
      return true;
    } else {
      console.log("Image Not Found:", response.status); // Log status code if image not found
      return false;
    }
  } catch (error) {
    console.error("Error fetching image:", error);
  }
}
