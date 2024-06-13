// src/SuccessPage.js
import React from "react";
import { useLocation } from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();
  const { formValues } = location.state || {};

  return (
    <div className="success-container">
      <h2>Form Submitted Successfully!</h2>
      <div className="form-details">
        {formValues ? (
          <ul>
            {Object.keys(formValues).map(
              (key) =>
                key !== "showPassword" && (
                  <li key={key}>
                    <strong>{key}:</strong> {formValues[key]}
                  </li>
                )
            )}
          </ul>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default SuccessPage;
