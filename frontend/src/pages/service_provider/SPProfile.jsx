import React, { useEffect, useState } from "react";
import {
  getServiceProviderDetails,
  updateServiceProvider,
} from "../../services/ServiceProviderService";

const SPProfile = ({ providerId }) => {
  const [serviceProvider, setServiceProvider] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  const [isEditingContact, setIsEditingContact] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);

  const [newContact, setNewContact] = useState("");
  const [newEmail, setNewEmail] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getServiceProviderDetails(providerId);
        // console.log(providerId);

        setServiceProvider(data);
        setContact(data.phone_no || "");
        setEmail(data.email || "");

        setNewContact(data.phone_no || "");
        setNewEmail(data.email || "");
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [providerId]);

  const handleUpdate = async (type) => {
    let updatedData = {
      phone_no: contact,
      email: email,
    };

    if (type === "contact") {
      updatedData.phone_no = newContact;
      setContact(newContact);
      setIsEditingContact(false);
    } else if (type === "email") {
      updatedData.email = newEmail;
      setEmail(newEmail);
      setIsEditingEmail(false);
    }

    try {
      await updateServiceProvider(providerId, updatedData);
      alert("Updated successfully!");
    } catch (error) {
      alert("Update failed!");
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
              {Array.isArray(serviceProvider.services) &&
                serviceProvider.services.map((service, index) => (
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
          <div className="flex items-center space-x-3"></div>
        </div>
      </div>
    </div>
  );
};

export default SPProfile;
