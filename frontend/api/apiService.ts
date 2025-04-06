import api from "./api";
import {UserInfo, expenseBill, expenseBillItem } from "@/api/apiInterface";

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
//get expense by user
export const GetExpense = async (userId: string) => {
  try {
    const response = await api.get(`/expense/getexpenseByUser/${userId}`,);
    return response.data;
  } catch (error) {
    console.error("Error getting expense info:", error);
    throw error;
  }
};

//get expense by id
export const GetExpenseById = async (expenseId: string) => {
  try {
    const response = await api.get(`/expense/getexpense/${expenseId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting expense info:", error);
    throw error;
  }
};

//get expense items by id
export const GetExpenseItemsById = async (expenseId: string) => {
  try {
    const response = await api.get(`/expense/getexpenseItems/${expenseId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting expense info:", error);
    throw error;
  }
};

//update expense
export const UpdateExpense = async (expenseId: string, expenseInfo: any ) => {
  try {
    const response = await api.put(`/expense/updateExpense/${expenseId}`, expenseInfo);
    return response.data;
  } catch (error) {
    console.error("Error updating expense info:", error);
    throw error;
  }
}

//Debt

//get debt by user
export const GetDebtWithAllConnectedUser = async (userId: string, borrowerIds: JSON) => {  
  try {
    const response = await api.post(`/debt/getByLenderAndBorrowers/${userId}`, {borrowerIds});
    return response.data;
  } catch (error) {
    console.error("Error getting debt info:", error);
    throw error;
  }
}