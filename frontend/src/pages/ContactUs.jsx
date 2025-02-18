import React from "react";
import img1 from "../assets/OIP (3).jpeg";
import img2 from "../assets/OIP (4).jpeg";
import img3 from "../assets/R.jpeg";

const ContactUs = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h4>Contact Us</h4>

      <section>
        <h2>Get in Touch with Homify</h2>
        <p>
          We're here to assist you with all your household needs. Whether you
          have a question about our services or want to schedule an appointment,
          feel free to reach out to us. Our friendly team is always ready to
          help!
        </p>
      </section>
      <section>
        <div style={{ display: "flex", gap: "10px" }}>
          {/* Add your image URLs below */}
          <img
            src={img2}
            alt="Service Image 1"
            style={{ width: "30%", height: "300px", borderRadius: "5px" }}
          />
        </div>
      </section>
      <section>
        <h2>Contact Information</h2>
        <p>
          <strong>Phone:</strong>9420840420
          <br />
          <strong>Email:</strong>donotask@gmail.com
          <br />
          <strong>Address:</strong> Don't dare to ask
        </p>
      </section>

      <section>
        <h2>Send Us a Message</h2>
        <form>
          <div style={{ marginBottom: "10px" }}>
            <label
              htmlFor="name"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label
              htmlFor="email"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label
              htmlFor="message"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#4CAF50",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </form>
      </section>

      <section style={{ marginTop: "20px" }}>
        <p>
          Thank you for considering Homify for your household needs. We look
          forward to serving you and turning your house into the perfect home.
        </p>
      </section>
    </div>
  );
};

export default ContactUs;
