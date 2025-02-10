import axios from "axios";

const API_URL = "http://localhost:8080/api/auth"; // Change to your backend URL

export const registerCustomer = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/register/customer`, data);
    return response.data;
  } catch (error) {
    console.error("Customer registration failed:", error);
    throw error;
  }
};

export const registerServiceProvider = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/register/service-provider`, data);
    return response.data;
  } catch (error) {
    console.error("Service Provider registration failed:", error);
    throw error;
  }
};
