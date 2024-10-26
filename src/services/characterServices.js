import { api } from "../api/api";

export const getCharacterNames = async () => {
  try {
    const response = await api.get("/characters");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
