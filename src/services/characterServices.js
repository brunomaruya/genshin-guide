import { api } from "../api/api";

export const getCharacterNames = async () => {
  try {
    const response = await api.get("/characters");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCharacter = async (name) => {
  try {
    const response = await api.get(`/characters/${name}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
