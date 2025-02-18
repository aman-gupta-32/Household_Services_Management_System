import axios from "axios";

const baseURL = "http://localhost:8080/customer";

export const getAllServices = async () => {
  const response = await axios.get(`${baseURL}/addtocart`);

  return response.data;
};

export const addBookings = async (bookingData) => {
  console.log(bookingData);
  const response = await axios.post(`${baseURL}/booking`, bookingData);

  return response.data;
};


export const slotChecking = async (bookingData) => {
  console.log(bookingData);
  const response = await axios.post(`http://localhost:8080/customer/slotschecking`, bookingData);

  return response.data;
};
