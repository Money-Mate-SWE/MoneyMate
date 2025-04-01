import api from "./api";

//User api

//create user info
export const CreateUser = async (username: string, userInfo: JSON) => {
  try {
    const response = await api.put(`/user/newUser`, userInfo);
    return response.data;
  } catch (error) {
    console.error("Error updating user info:", error);
    throw error;
  }
};

//get user
export const GetUser = async (username: string) => {
  try {
    const response = await api.get(`/user/getUserByUsername/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error getting user info:", error);
    throw error;
  }
};

