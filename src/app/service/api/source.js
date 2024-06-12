// "use server";
import axios from "axios";
export const getData = async (url) => {
  let data = [];
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
