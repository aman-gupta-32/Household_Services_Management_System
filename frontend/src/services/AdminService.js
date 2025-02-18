import axios from "axios";

const baseURL = "http://localhost:8080"; // Update this with your backend URL

// Function to fetch all customers
export const getAllCustomers = async () => {
  try {
    const response = await axios.get(`${baseURL}/admin/displaycustomers`);
    console.log("Fetched Customers:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
};

export const getServiceProviders = async () => {
  try {
    const response = await axios.get(`${baseURL}/admin/manageserviceprovider`);
    return response.data;
  } catch (error) {
    console.error("Error fetching service providers:", error);
    throw new Error("Failed to fetch service providers");
  }
};


export async function getServicesList() {
  try {
    //console.log("axios")
    // create the url
    //const url =  "http://localhost:8080/admin/serviceslist"//createUrl('todo/public')
    const response = await axios.get(`${baseURL}/admin/serviceslist`);
    console.log(response)
    return response.data
  } catch (ex) {
    return { status: 'error', error: ex }
  }
}

export const getdeletesp = async(id)=> {
  try{
    const response = await axios.delete(`${baseURL}/admin/manageserviceprovider/${id}`);
    return response.data
  } catch (ex) {
    return { status: 'error', error: ex }
  }
}
