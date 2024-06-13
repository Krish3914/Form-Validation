// src/components/FormComponent.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormComponent.css";

const FormComponent = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    showPassword: false,
    phoneNo: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const countries = {
    India: ["Jaipur", "Delhi", "Mumbai", "Chennai"],
    USA: ["New York", "Los Angeles", "Chicago"],
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = formValues.firstName ? "" : "First Name is required";
    tempErrors.lastName = formValues.lastName ? "" : "Last Name is required";
    tempErrors.username = formValues.username ? "" : "Username is required";
    tempErrors.email = formValues.email
      ? /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formValues.email)
        ? ""
        : "Email is not valid"
      : "Email is required";
    tempErrors.password = formValues.password ? "" : "Password is required";
    tempErrors.phoneNo = formValues.phoneNo ? "" : "Phone Number is required";
    tempErrors.country = formValues.country ? "" : "Country is required";
    tempErrors.city = formValues.city ? "" : "City is required";
    tempErrors.panNo = formValues.panNo ? "" : "PAN Number is required";
    tempErrors.aadharNo = formValues.aadharNo
      ? ""
      : "Aadhar Number is required";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handlePasswordToggle = () => {
    setFormValues({
      ...formValues,
      showPassword: !formValues.showPassword,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      navigate("/success", { state: { formValues } });
    }
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <span className="error">{errors.firstName}</span>
            )}
          </div>

          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <span className="error">{errors.lastName}</span>
            )}
          </div>

          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}
            />
            {errors.username && (
              <span className="error">{errors.username}</span>
            )}
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type={formValues.showPassword ? "text" : "password"}
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={handlePasswordToggle}
              className="toggle-button"
            >
              {formValues.showPassword ? "Hide" : "Show"}
            </button>
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          <div className="form-group">
            <label>Phone No.:</label>
            <input
              type="text"
              name="phoneNo"
              value={formValues.phoneNo}
              onChange={handleChange}
            />
            {errors.phoneNo && <span className="error">{errors.phoneNo}</span>}
          </div>

          <div className="form-group">
            <label>Country:</label>
            <select
              name="country"
              value={formValues.country}
              onChange={handleChange}
            >
              <option value="">Select Country</option>
              {Object.keys(countries).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && <span className="error">{errors.country}</span>}
          </div>

          <div className="form-group">
            <label>City:</label>
            <select
              name="city"
              value={formValues.city}
              onChange={handleChange}
              disabled={!formValues.country}
            >
              <option value="">Select City</option>
              {formValues.country &&
                countries[formValues.country].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
            {errors.city && <span className="error">{errors.city}</span>}
          </div>

          <div className="form-group">
            <label>PAN No.:</label>
            <input
              type="text"
              name="panNo"
              value={formValues.panNo}
              onChange={handleChange}
            />
            {errors.panNo && <span className="error">{errors.panNo}</span>}
          </div>

          <div className="form-group">
            <label>Aadhar No.:</label>
            <input
              type="text"
              name="aadharNo"
              value={formValues.aadharNo}
              onChange={handleChange}
            />
            {errors.aadharNo && (
              <span className="error">{errors.aadharNo}</span>
            )}
          </div>
        </div>
        <div className="form-group submit-button">
          <button
            type="submit"
            disabled={!Object.values(formValues).every((value) => value !== "")}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
