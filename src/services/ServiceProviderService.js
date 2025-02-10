import axios from "axios";

const baseURL = "http://localhost:8080";

export const getServices = async () => {
  console.log(`${baseURL}/serviceprovider`);
  const response = await axios.get(`${baseURL}/serviceprovider`);

  console.log("Services fetched:", response.data);
  return response.data;
};

export const updateServiceProviderServices = async (providerId, services) => {
  const response = await axios.put(`/serviceprovider/${providerId}`, {
    services,
  });
  return response.data;
};


export const getServiceProviderDetails = async (providerId) => {
  console.log(`${baseURL}/serviceprovider/${providerId}`);
  const response = await axios.get(
    `${baseURL}/serviceprovider/${providerId}`
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