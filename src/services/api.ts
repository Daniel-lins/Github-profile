import axios from "axios";

const baseUrl = "https://api.github.com/users/";

export const getUserData = async (UserName: string) => {
  try {
    const { data } = await axios.get(baseUrl + `${UserName}`);
    return data;
  } catch (error) {
    throw error;
  }
};
