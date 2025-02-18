import axios from "axios";

const baseURL = "http://localhost:8080";

export const getAllBookings = async () => {
  try {
    const response = await axios.get(`${baseURL}/admin/booking`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw error;
  }
};
