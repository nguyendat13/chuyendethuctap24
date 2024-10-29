import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../../services/UserService";
import LogoLogin from "../../../assets/images/logo_login.webp";
import Validation from "./LoginValidation";
import SignWithOther from "./SignWithOther";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrors({ general: "Email và mật khẩu không được để trống." });
      return;
  }

  // Kiểm tra định dạng email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Mẫu kiểm tra email cơ bản
  if (!emailPattern.test(email)) {
      setErrors({ general: "Email không hợp lệ." });
      return;
  }

  const validationErrors = Validation({ email, password });
  if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
  }

    const user = { email, password };

    try {
      const response = await UserService.login(user);
      console.log("Login API response:", response); // Log the response for debugging

      // Check if response is structured as expected
      if (response && response.status === true) {
        const { user: userData, token } = response; // Adjust based on your API response structure

        localStorage.setItem("sessionToken", token);
        localStorage.setItem("userData", JSON.stringify(userData)); // Make sure `userData` has all the fields you need

        navigate("/home/profile");
      } else {
        console.error("Unexpected response structure:", response);
        setErrors({ general: "Unexpected response structure" });
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      if (error.response && error.response.status === 401) {
        setErrors({ general: "Sai email hoặc mật khẩu. Vui lòng thử lại." });
    } else {
        setErrors({ general: "Đã xảy ra lỗi. Vui lòng thử lại." });
    }    }
  };

  return (
    <section className="signin container py-5">
      <div className="container-fluid h-custom py-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={LogoLogin} className="img-fluid" alt="Logo" />
          </div>
          <SignWithOther />
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div data-mdb-input-init className="form-outline mb-4 mt-4">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  required
                />
                {errors.email && (
                  <span className="text-danger">{errors.email}</span>
                )}
              </div>

              <div data-mdb-input-init className="form-outline mb-3">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  required
                />
                {errors.password && (
                  <span className="text-danger">{errors.password}</span>
                )}
              </div>

              {errors.general && (
                <div className="alert alert-danger">{errors.general}</div>
              )}

              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <Link to="/home/forgot_password" className="text-body">
                  Forgot password?
                </Link>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2 d-flex justify-content-center">
                <button
                  type="submit"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-lg"
                >
                  Login
                </button>
              </div>

              <p className="small fw-bold mt-2 pt-1 mb-0 text-center">
                Don't have an account yet?
                <Link to="/register" className="link-danger">
                  {" "}
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
