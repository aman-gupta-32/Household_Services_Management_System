import React from 'react';
import NavBar from '../components/NavBar';
import Img1 from '../images/OIP.jpeg'
import Img2 from '../images/OIP (1).jpeg'
import Img3 from '../images/OIP (2).jpeg'
import Img4 from '../images/download.jpeg'
const AboutUs = () => {
  return (
    <div>
   
   
    <h4>About Us</h4>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif',}}>
     

      <section>
        <h2>Welcome to <b>HOMIFY</b>!</h2>
        <p>
          At <b>HOMIFY</b>, we transform houses into homes with our expert household services. 
          Our passion for making living spaces cleaner, cozier, and more efficient drives everything we do. 
          From meticulous cleaning to handy repairs, we've got you covered.
            <br/>
          Founded in 2025,HOMIFY started as a small team of home enthusiasts and has grown 
          into a trusted name in the industry. Our journey began with a simple idea: to provide reliable, 
          high-quality services that make a real difference in people's lives. Today, we continue to uphold 
          that vision, ensuring every client enjoys the comfort and convenience they deserve.
        </p>
      </section>

      <section>
        <h2>Our Services</h2>
        <ul>
          <li><strong>Cleaning:</strong> Whether it's a one-time deep clean or regular maintenance, our team ensures your home sparkles.</li>
          <li><strong>Repairs:</strong> From minor fixes to major repairs, our skilled technicians can handle it all.</li>
          <li><strong>Organization:</strong> We help declutter and organize your space to enhance functionality and aesthetics.</li>
          <li><strong>Landscaping:</strong> Our experts will make your outdoor spaces as inviting as your indoor ones.</li>
        </ul>
      </section>

      <section>
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Experienced Team:</strong> Our professionals are trained, vetted, and passionate about what they do.</li>
          <li><strong>Customer Satisfaction:</strong> We prioritize your needs and aim to exceed your expectations every time.</li>
          <li><strong>Affordable Pricing:</strong> Quality services at competitive rates, with no hidden fees.</li>
          <li><strong>Eco-Friendly Practices:</strong> We use sustainable products and methods to keep your home and the environment safe.</li>
        </ul>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you! Get in touch with us to learn more about our services or to schedule an appointment.
          <br />
          <strong>Phone:</strong> [Your Phone Number]
          <br />
          <strong>Email:</strong> [Your Email Address]
          <br />
          <strong>Address:</strong> [Your Address]
        </p>
      </section>

      <section>
        <h2>Gallery</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          {/* Add your image URLs below */}
          <img src={Img4} alt="Service Image 1" style={{ width: '23%', borderRadius: '5px' }} />
          <img src={Img2} alt="Service Image 2" style={{ width: '23%', borderRadius: '5px' }} />
          <img src={Img1} alt="Service Image 3" style={{ width: '23%', borderRadius: '5px' }} />
          <img src={Img3} alt="Service Image 4" style={{ width: '23%', borderRadius: '5px' }} />

        </div>
      </section>

      <section style={{ marginTop: '20px' }}>
        <p>
          Thank you for considering [Your Company Name] for your household needs. We look forward to serving you 
          and turning your house into the perfect home.
        </p>
      </section>
    </div>
    </div>
  );
};

export default AboutUs;
