import api from "./api";
import { UserInfo } from "@/api/apiInterface";

//User api

//create user info
export const CreateUser = async (userInfo: UserInfo) => {
  try {
    const response = await api.post(`/user/newUser`, userInfo);
    return response.data;
  } catch (error) {
    console.error("Error updating user info:", error);
    throw error;
  }
};

//get user
export const GetUser = async (email: string) => {
  try {
    const response = await api.get(`/user/getUserByEmail/${email}`);
    return response.data;
  } catch (error) {
    console.error("Error getting user info:", error);
    throw error;
  }
};

//update user
export const UpdateUser = async (userId: string, userInfo: UserInfo) => {
  try {
    const response = await api.put(`/user/updateUser/${userId}`, userInfo);
    return response.data;
  } catch (error) {
    console.error("Error updating user info:", error);
    throw error;
  }
};

//transaction
export const GetExpense = async (userId: string) => {
  try {
    const response = await api.put(`/expense/getexpenseByUser/${userId}`,);
    return response.data;
  } catch (error) {
    console.error("Error getting expense info:", error);
    throw error;
  }
};

