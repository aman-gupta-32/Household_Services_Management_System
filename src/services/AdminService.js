import axios from "axios";

const baseURL = "http://localhost:8080"; // Update this with your backend URL

// Function to fetch all customers
export const getAllCustomers = async () => {
  try {
    const response = await axios.get(`${baseURL}/admin/customers`);
    console.log("Fetched Customers:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
};

export const getServiceProviders = async () => {
  try {
    const response = await axios.get(`${baseURL}/serviceprovider`);
    return response.data;
  } catch (error) {
    console.error("Error fetching service providers:", error);
    throw new Error("Failed to fetch service providers");
  }
};
