import React, { useState } from "react";

function HogForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: "",
    weight: "",
    specialty: "",
    greased: false,
    "highest medal achieved": "",
    image: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert weight to number and create new hog object
    const newHog = {
      ...formData,
      weight: parseFloat(formData.weight)
    };
    
    onAddHog(newHog);
    
    // Reset form after submission
    setFormData({
      name: "",
      weight: "",
      specialty: "",
      greased: false,
      "highest medal achieved": "",
      image: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="specialty">Specialty:</label>
        <input
          type="text"
          id="specialty"
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="greased">Greased?</label>
        <input
          type="checkbox"
          id="greased"
          name="greased"
          checked={formData.greased}
          onChange={handleChange}
        />
      </div>



      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;