import axios from "axios";

const API_URL = "http://localhost:8080"; 

export const registerCustomer = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/customer/register`, data);
    return response.data;
  } catch (error) {
    console.error("Customer registration failed:", error);
    throw error;
  }
};

export const registerServiceProvider = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/serviceprovider/register`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Service Provider registration failed:", error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    console.log(password);
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};
