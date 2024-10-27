import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../../services/UserService";
import LogoLogin from "../../../assets/images/logo_login.webp";
import Validation from "./RegisterValidation";
import SignWithOther from "./SignWithOther";

const Register = () => {
    const [insertId, setInsertId] = useState(0);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [roles, setRoles] = useState("admin");
    const [gender, setGender] = useState(1);
    const [address, setAddress] = useState("");
    const [status, setStatus] = useState(1);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();
  
      // Prepare the FormData object
      const image = document.querySelector("#image");
      const user = new FormData();
      user.append("username", username);
      user.append("password", password);
      user.append("repassword", repassword);
      user.append("email", email);
      user.append("phone", phone);
      user.append("name", name);
      user.append("gender", gender);
      user.append("roles", roles);
      user.append("address", address);
      user.append("status", status);
      user.append("image", image.files.length === 0 ? "" : image.files[0]);
  
      // Password complexity check
      const isPasswordComplex = (password) => {
          const minLength = 8;
          const hasUpperCase = /[A-Z]/.test(password);
          const hasLowerCase = /[a-z]/.test(password);
          const hasNumbers = /\d/.test(password);
          const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
          return (
              password.length >= minLength &&
              hasUpperCase &&
              hasLowerCase &&
              hasNumbers &&
              hasSpecialChars
          );
      };
  
      if (!isPasswordComplex(password)) {
          alert("Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.");
          return;
      }
  
      if (repassword !== password) {
          alert("Mật khẩu xác nhận không đúng");
          return;
      }
  
      // Check if email and phone exists
      try {
          const emailExistsResponse = await UserService.checkEmail(email);
          if (emailExistsResponse.exists) {
              alert("Email đã tồn tại.");
              return; // Dừng quá trình đăng ký
          }
  
          const phoneExistsResponse = await UserService.checkPhone(phone);
          if (phoneExistsResponse.exists) {
              alert("Số điện thoại đã tồn tại.");
              return; // Dừng quá trình đăng ký
          }
  
          // Validate fields before sending
          if (username === "" || email === "" || password === "") {
              setErrors(Validation(user));
              return; // Dừng quá trình đăng ký nếu có lỗi
          }
  
          // Submit the form data
          const result = await UserService.store(user);
          if (result.status === true) {
              setInsertId(result.user.insertId);
              navigate("/login");
          } else {
              alert("Đăng ký không thành công. Vui lòng thử lại.");
          }
      } catch (error) {
          // console.error("Có lỗi xảy ra khi kiểm tra email/phone:", error);
          alert("Đã xảy ra lỗi. Vui lòng thử lại sau.");
      }
  };
  
    return (
        <section className="signup container py-5">
            <div className="container-fluid h-custom py-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={LogoLogin} className="img-fluid" alt="Sample image" />
                    </div>
                    <SignWithOther />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-outline mb-4 mt-4">
                                <label className="form-label" htmlFor="username">User Name</label>
                                <input
                                    value={username}
                                    onChange={(event) => setUsername(event.target.value)}
                                    type="text"
                                    id="username"
                                    className="form-control"
                                    name="username"
                                    placeholder="Enter a valid user name"
                                />
                                {errors.username && <span className="text-danger">{errors.username}</span>}
                            </div>

                            <div className="form-outline mb-3">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                />
                                {errors.password && <span className="text-danger">{errors.password}</span>}
                            </div>

                            <div className="form-outline mb-4 mt-4">
                                <label className="form-label" htmlFor="repassword">Repeat the Password</label>
                                <input
                                    value={repassword}
                                    onChange={(event) => setRepassword(event.target.value)}
                                    type="password"
                                    id="repassword"
                                    className="form-control"
                                    name="repassword"
                                    placeholder="Re-enter the password"
                                />
                            </div>

                            <div className="form-outline mb-4 mt-4">
                                <label className="form-label" htmlFor="email">Email</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter a valid email address"
                                />
                                {errors.email && <span className="text-danger">{errors.email}</span>}
                            </div>

                            <div className="form-outline mb-4 mt-4">
                                <label className="form-label" htmlFor="phone">Phone</label>
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="tel"
                                    id="phone"
                                    className="form-control"
                                    name="phone"
                                    placeholder="Enter a valid phone "
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-outline mb-4 mt-4">
                                <label className="form-label" htmlFor="fullname">Full Name</label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    id="fullname"
                                    className="form-control"
                                    name="fullname"
                                    placeholder="Enter a valid full name"
                                />
                            </div>

                            <div className="form-outline mb-4 mt-4">
                                <label className="form-label" htmlFor="gender">Gender</label>
                                <select
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    id="gender"
                                    className="form-select"
                                    name="gender"
                                >
                                    <option>Chọn giới tính</option>
                                    <option value="1">Nam</option>
                                    <option value="0">Nữ</option>
                                </select>
                            </div>

                            <div className="form-outline mb-4 mt-4">
                                <label className="form-label" htmlFor="address">Address</label>
                                <input
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    type="text"
                                    id="address"
                                    className="form-control"
                                    name="address"
                                    placeholder="Enter a valid address"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="image" className="d-inline-block mb-1">Image</label>
                                <input type="file" id="image" className="form-control" />
                            </div>

                            <div className="form-outline mb-4 mt-4">
                                <label className="form-label" htmlFor="status">Status</label>
                                <select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    id="status"
                                    className="form-select"
                                    name="status"
                                >
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="text-center text-lg-start mt-4 pt-2 d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary btn-lg">Register</button>
                        </div>
                        <p className="small fw-bold mt-2 pt-1 mb-0 text-center">
                            Already have an account?
                            <Link to="/login" className="link-danger">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;
