// import React, { useEffect, useState } from "react";
// import {
//   getServiceProviderDetails,
//   getServicesByServiceProviderId,
// } from "../services/ServiceProviderService";
// import { data } from "react-router-dom";

// const SPProfile = ({ providerId }) => {
//   const [serviceProvider, setServiceProvider] = useState(null);
//   // const [service,setServices] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getServiceProviderDetails(providerId);
//         setServiceProvider(data);

//         console.log(data);

//         /* const serviceList = await getServicesByServiceProviderId(providerId);
//         setServiceProvider(serviceList);  */
//       } catch (error) {
//         console.error("Error fetching service provider details:", error);
//       }
//     };

//     fetchData();
//   }, [providerId]);

//   if (!serviceProvider) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Profile</h2>
//       <hr />
//       <div>
//         {/* Left Section */}
//         <div style={{ position: "absolute", marginLeft: "200px" }}>
//           <p className="font-semibold">Name: {serviceProvider.name}</p>
//           <p className="font-semibold mt-2">Services providing:</p>
//           <table className="w-full border mt-2 bg-red-100">
//             <thead>
//               <tr className="bg-red-200">
//                 <th className="border px-4 py-2 text-left">#</th>
//                 <th className="border px-4 py-2 text-left">Service</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.services &&
//                 data.services.map((service, index) => (
//                   <tr key={index} className="border">
//                     <td className="border px-4 py-2">{index + 1}</td>
//                     <td className="border px-4 py-2">{service}</td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//           <br />
//           <p>Experience: {serviceProvider.exp} Years</p>
//           <p>Earnings: ${serviceProvider.earnings}</p>
//         </div>

//         {/* Right Section */}
//         <div
//           className="self-start w-1/3 text-right"
//           style={{ paddingLeft: "500px" }}
//         >
//           <p
//             className="font-semibold"
//             style={{ display: "inline", paddingRight: "50px" }}
//           >
//             Contact Details: {serviceProvider.phone_no}
//           </p>
//           <button className="bg-purple-200 px-4 py-1 mt-1 rounded">
//             Add Contact
//           </button>
//           <br />
//           <br />
//           <p
//             className="font-semibold mt-2"
//             style={{ display: "inline", paddingRight: "130px" }}
//           >
//             Email: {serviceProvider.email}
//           </p>
//           <button className="bg-purple-200 px-4 py-1 mt-1 rounded">
//             Update Email
//           </button>
//           <br />
//           <br />
//           <p
//             className="font-semibold mt-2"
//             style={{ display: "inline", paddingRight: "98px" }}
//           >
//             Service Area: {serviceProvider.service_area}
//           </p>
//           <button className="bg-purple-200 px-4 py-1 mt-1 rounded">
//             Update Area
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SPProfile;

/*
import React, { useEffect, useState } from "react";
import { getServiceProviderDetails } from "../services/ServiceProviderService";

const SPProfile = ({ providerId }) => {
  const [serviceProvider, setServiceProvider] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getServiceProviderDetails(providerId);
        console.log("API Response:", data); // Log the API response
        setServiceProvider(data);
      } catch (error) {
        console.error("Error fetching service provider details:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [providerId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!serviceProvider || !serviceProvider.services) {
    console.log("No services found"); // Log if services are not found
    return <div>No service provider details available.</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <hr />
      <div>
        <div style={{ position: "absolute", marginLeft: "200px" }}>
          <p className="font-semibold">Name: {serviceProvider.name}</p>
          <p className="font-semibold mt-2">Services providing:</p>
          <table className="w-full border mt-2 bg-red-100">
            <thead>
              <tr className="bg-red-200">
                <th className="border px-4 py-2 text-left">#</th>
                <th className="border px-4 py-2 text-left">Service</th>
              </tr>
            </thead>
            <tbody>
              {serviceProvider.services.map((service, index) => (
                <tr key={index} className="border">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{service}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <p>Experience: {serviceProvider.exp} Years</p>
          <p>Earnings: ${serviceProvider.earnings}</p>
        </div>

        
        <div
          className="self-start w-1/3 text-right"
          style={{ paddingLeft: "500px" }}
        >
          <p
            className="font-semibold"
            style={{ display: "inline", paddingRight: "50px" }}
          >
            Contact Details: {serviceProvider.phone_no}
          </p>
          <button className="bg-purple-200 px-4 py-1 mt-1 rounded">
            Add Contact
          </button>
          <br />
          <br />
          <p
            className="font-semibold mt-2"
            style={{ display: "inline", paddingRight: "130px" }}
          >
            Email: {serviceProvider.email}
          </p>
          <button className="bg-purple-200 px-4 py-1 mt-1 rounded">
            Update Email
          </button>
          <br />
          <br />
          <p
            className="font-semibold mt-2"
            style={{ display: "inline", paddingRight: "98px" }}
          >
            Service Area: {serviceProvider.service_area}
          </p>
          <button className="bg-purple-200 px-4 py-1 mt-1 rounded">
            Update Area
          </button>
        </div>
      </div>
    </div>
  );
};

export default SPProfile;
*/

import React, { useEffect, useState } from "react";
import { getServiceProviderDetails } from "../services/ServiceProviderService";

const SPProfile = ({ providerId }) => {
  const [serviceProvider, setServiceProvider] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [serviceArea, setServiceArea] = useState("");

  const [isEditingContact, setIsEditingContact] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingServiceArea, setIsEditingServiceArea] = useState(false);

  const [newContact, setNewContact] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newServiceArea, setNewServiceArea] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getServiceProviderDetails(providerId);
        setServiceProvider(data);
        setContact(data.phone_no || "");
        setEmail(data.email || "");
        setServiceArea(data.service_area || "");
        setNewContact(data.phone_no || "");
        setNewEmail(data.email || "");
        setNewServiceArea(data.service_area || "");
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [providerId]);

  const handleUpdate = (type) => {
    if (type === "contact") {
      setContact(newContact);
      setIsEditingContact(false);
    } else if (type === "email") {
      setEmail(newEmail);
      setIsEditingEmail(false);
    } else if (type === "serviceArea") {
      setServiceArea(newServiceArea);
      setIsEditingServiceArea(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!serviceProvider)
    return <div>No service provider details available.</div>;

  return (
    <div>
      <h2>Profile</h2>
      <hr />
      <div>
        <div style={{ position: "absolute", marginLeft: "200px" }}>
          <p className="font-semibold">Name: {serviceProvider.name}</p>

          <p className="font-semibold mt-2">Services providing:</p>
          <table className="w-full border mt-2 bg-red-100">
            <thead>
              <tr className="bg-red-200">
                <th className="border px-4 py-2 text-left">#</th>
                <th className="border px-4 py-2 text-left">Service</th>
              </tr>
            </thead>
            <tbody>
              {serviceProvider.services.map((service, index) => (
                <tr key={index} className="border">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{service}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <p>Experience: {serviceProvider.exp} Years</p>
        </div>

        <div
          className="self-start w-1/3 text-right"
          style={{ paddingLeft: "500px" }}
        >
          <div className="flex items-center space-x-3">
            <p className="font-semibold">Contact Details:</p>
            {isEditingContact ? (
              <input
                type="text"
                value={newContact}
                onChange={(e) => setNewContact(e.target.value)}
                className="border px-2 py-1"
              />
            ) : (
              <p>{contact}</p>
            )}
            <button
              onClick={() =>
                isEditingContact
                  ? handleUpdate("contact")
                  : setIsEditingContact(true)
              }
              className="bg-purple-200 px-4 py-1 rounded mt-1"
            >
              {isEditingContact ? "Save" : "Edit"}
            </button>
          </div>

          <br />
          <div className="flex items-center space-x-3">
            <p className="font-semibold">Email:</p>
            {isEditingEmail ? (
              <input
                type="text"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="border px-2 py-1 w-40"
              />
            ) : (
              <p>{email}</p>
            )}
            <button
              onClick={() =>
                isEditingEmail ? handleUpdate("email") : setIsEditingEmail(true)
              }
              className="bg-purple-200 px-4 py-1 rounded"
            >
              {isEditingEmail ? "Save" : "Edit"}
            </button>
          </div>

          <br />
          <div className="flex items-center space-x-3">
            <p className="font-semibold">Service Area:</p>
            {isEditingServiceArea ? (
              <input
                type="text"
                value={newServiceArea}
                onChange={(e) => setNewServiceArea(e.target.value)}
                className="border px-2 py-1 w-40"
              />
            ) : (
              <p>{serviceArea}</p>
            )}
            <button
              onClick={() =>
                isEditingServiceArea
                  ? handleUpdate("serviceArea")
                  : setIsEditingServiceArea(true)
              }
              className="bg-purple-200 px-4 py-1 rounded"
            >
              {isEditingServiceArea ? "Save" : "Edit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SPProfile;
