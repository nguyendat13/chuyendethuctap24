import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../../services/UserService";
import LogoLogin from "../../../assets/images/logo_login.webp";
import logo2 from "../../../assets/images/img-grid-2.jpg";
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
  
    const validationErrors = Validation({ email, password });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    const user = { email, password };
  
    try {
      const { user: userData, token } = await UserService.login(user);
  
      localStorage.setItem("sessionToken", token);
      localStorage.setItem("userData", JSON.stringify(userData));
  
      navigate("/home/profile");
    } catch (error) {
      console.error("Login error:", error.message);
      setErrors({ general: error.message || "Invalid credentials" });
    }
  };
  
  
  
  return (
    <section className="signin container py-5">
      <div className="container-fluid h-custom py-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={LogoLogin} className="img-fluid" alt="Sample image" />
          </div>
          <SignWithOther />
          <div className="row">
            <div className="col-md-6">
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
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                />
                {errors.password && (
                  <span className="text-danger">{errors.password}</span>
                )}
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check mb-2">
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
            <div className="forgotpass">
              <Link to="/home/forgot_password" className="text-body">
                Forgot password?
              </Link>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
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
                Register
              </Link>
            </p>
          </form>
          <div className="logo2 col-md-9 col-lg-6 col-xl-5">
            <img src={logo2} className="img-fluid" alt="Sample image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
