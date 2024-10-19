import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import UserService from "../../../services/UserService";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await UserService.resetPassword(token, newPassword);
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error resetting password", error);
      setMessage("Failed to reset password. Try again later.");
    }
  };

  return (
    <div className="reset-password-container">
      <h1>Reset Password</h1>
      <form onSubmit={handleResetPassword}>
        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
