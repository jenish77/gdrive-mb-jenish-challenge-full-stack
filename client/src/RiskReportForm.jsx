import React, { useState } from 'react';
import './RiskReportForm.css';

const RiskReportForm = ({ onClose }) => {      
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    country: '',
    businessEmail: '',
    companyName: '',
    phoneNumber: ''
  });

  const [apiResponse, setApiResponse] = useState(null); // State to hold API response


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    try {
      const response = await fetch('http://localhost:3000/auth/google', {
        method: 'GET', // Adjust method if necessary
        headers: {
          'Content-Type': 'application/json'
          // Add any necessary headers
        },
        // body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      setApiResponse(data); // Save API response to state
      // Navigate to a new page to display the API response in a table
      // You can use React Router or other navigation methods here
      // For simplicity, let's assume a new page is opened in a new tab
      window.open('/api-response', '_blank');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error scenario
    }
  };

  console.log('API response:', apiResponse);

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <button className="close-btn" onClick={onClose}>X</button>
        <h1>Get a free Risk Report</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First name*</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Last name*</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Job title*</label>
            <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Country/Region*</label>
            <input type="text" name="country" value={formData.country} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Business Email*</label>
            <input type="email" name="businessEmail" value={formData.businessEmail} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Company name*</label>
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone number</label>
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          </div>
          <p>
            Metomic needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at anytime. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, check out our Privacy Policy.
          </p>
          <button type="submit">Start Scan</button>
        </form>
      </div>
    </div>
  );
};

export default RiskReportForm;
