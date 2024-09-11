import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignupForm = () => {
    const navigate = useNavigate();  
  const [formData, setFormData] = useState({
    name:"",
    username: "",
    email: "",
    password: "",
    bio:""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://mern-info-application-1.onrender.com/api/auth/signup", formData); // Backend signup endpoint
      console.log("User signed up:", res.data);
      navigate('/users');
    } catch (err) {
      console.error("Error signing up:", err.response ? err.response.data : err.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bio" className="form-label">
            Bio
          </label>
          <input
            type="text"
            className="form-control"
            id="bio"
            name="bio"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Sign Up
        </button>
        {/* Navigation to Login Page */}
        <div className="mt-3 text-center">
          <p>Already have an account? 
            <button 
              type="button" 
              className="btn btn-link"
              onClick={() => navigate('/')}  // Navigate to login page
            >
              Login here
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;

