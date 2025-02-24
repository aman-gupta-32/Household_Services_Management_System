import axios from "axios";

const baseURL = "http://localhost:8080";

export const getServices = async () => {
  console.log(`${baseURL}/admin/serviceslist`);
  const response = await axios.get(`${baseURL}/admin/serviceslist`);

  console.log("Services fetched:", response.data);
  return response.data;
};

/*
export const updateServiceProviderServices = async (providerId, services) => {
  const response = await axios.put(`/serviceprovider/${providerId}`, {
    services,
  });
  return response.data;
};
*/

export const updateServiceProvider = async (providerId, updatedData) => {
  try {
    const response = await axios.put(`${baseURL}/${providerId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating service provider:", error);
    throw error;
  }
};

export const getServiceProviderDetails = async (providerId) => {
  console.log(`${baseURL}/serviceprovider/profile/${providerId}`);
  const response = await axios.get(
    `${baseURL}/serviceprovider/profile/${providerId}`
  );

  console.log(response.data);
  return response.data;
};

/*
export const getServicesByServiceProviderId = async (providerId) => {
  console.log(`${baseURL}/serviceprovider/${providerId}`);
  const response = await axios.get(
    `${baseURL}/serviceprovider/${providerId}/services`
  );
  return response.data;
};
*/

export const updateServiceProviderServices = async (providerId, services) => {
  // console.log(services[0].name);
  const response = await fetch(`${baseURL}/serviceprovider/${providerId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: services[0].name,
      price: services[0].price,
    }),
  });
  return response.json();
};

export const totalAmount = async (id) => {
  const response = await axios.get(
    `${baseURL}/serviceprovider/totalamount/${id}`
  );

  console.log(response);
  return response.data;
};

export const pendingDoneOrders = async (id) => {
  const response = await axios.get(`${baseURL}/serviceprovider/orders/${id}`);
  console.log(response);
  return response.data;
};

export const jobsRating = async (id) => {
  const response = await axios.get(`${baseURL}/serviceprovider/jobs/${id}`);
  console.log(response);
  return response.data;
};

export const pendingOrders = async (id) => {
  try {
    const response = await axios.get(
      `${baseURL}/serviceprovider/porders/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error updating service provider:", error);
    throw error;
  }
};
