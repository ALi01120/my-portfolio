import React, { useState } from "react";
import "./styles/getInTouch.css";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState(""); // To display success or error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill in all fields.");
      return;
    }

    // Simulate form submission
    console.log("Form Submitted:", formData);

    // Show success message
    setFormStatus("Thank you! Your message has been sent.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="get-in-touch-container" id="contact">
      <h1>Get in Touch</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>

      {/* Display Form Status */}
      {formStatus && <p className="form-status">{formStatus}</p>}
    </div>
  );
};

export default GetInTouch;
