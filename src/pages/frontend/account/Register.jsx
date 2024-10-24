import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import UserService from "../../../services/UserService";
import LogoLogin from "../../../assets/images/logo_login.webp"
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
  const [errors,setErrors]=useState({})
  const navigate =useNavigate()

  const handleSubmit = (event) => {
    
    event.preventDefault();
    // alert("Đã thêm sản phẩm");
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
    if (repassword != password) {
      alert("Mật khẩu xác nhận không đúng");
      return;
    } else {
      if(username === "" && email === "" && password===""){
        setErrors(Validation(user))
      }else{
        (async () => {
          const result = await UserService.store(user);
          if (result.status === true) {
            setErrors(Validation(user))
            setInsertId(result.user.insertId);
            window.location.href = "/login";
          }
        })();
      }
      
    }
    
   
  };
  return (
    <section className="signup container py-5">
    <div className="container-fluid h-custom py-5">
      <div className="row d-flex justify-content-center align-items-center">
      <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={LogoLogin} className="img-fluid" alt="Sample image" />
          </div>
          <SignWithOther/>
          <div className="row">
            <div className="col-md-6">
            <div data-mdb-input-init className="form-outline mb-4 mt-4">
                <label className="form-label" for="username">
                  User Name
                </label>
                <input
                   value={username}
                   onChange={(event) => setUsername(event.target.value)}
                  type="username"
                  id="username"
                  className="form-control"
                  name="username"
                  placeholder="Enter a valid user name"
                />
              {errors.username && <span className="text-danger">{errors.username}</span>}

              </div>

              <div data-mdb-input-init className="form-outline mb-3">
                <label className="form-label" for="password">
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
            {errors.password && <span className="text-danger">{errors.password}</span>}

              </div>

              <div data-mdb-input-init className="form-outline mb-4 mt-4">
                <label className="form-label" for="password">
                  Repeat the Password
                </label>
                <input
                  value={repassword}
                  onChange={(event) => setRepassword(event.target.value)}
                  type="password"
                  id="repassword"
                  className="form-control"
                  name="password"
                  placeholder="Re-enter the password"
                />
              </div>

              <div data-mdb-input-init className="form-outline mb-4 mt-4">
                <label className="form-label" for="email">
                  Email
                </label>
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

              <div data-mdb-input-init className="form-outline mb-4 mt-4">
                <label className="form-label" for="phone">
                  Phone
                </label>
                <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                  type="phone"
                  id="phone"
                  className="form-control"
                  name="phone"
                  placeholder="Enter a valid phone "
                />
              </div>

            </div>
            <div className="col-md-6">
            <div data-mdb-input-init className="form-outline mb-4 mt-4">
                <label className="form-label" for="fullname">
                  Full Name
                </label>
                <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                  type="fullname"
                  id="fullname"
                  className="form-control"
                  name="fullname"
                  placeholder="Enter a valid full name"
                />
              </div>

              <div data-mdb-input-init className="form-outline mb-4 mt-4">
                <label className="form-label" for="gender">
                  Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  type="gender"
                  id="gender"
                  className="form-select"
                  name="gender"
                > <option>Chọn giới tinh</option>
                <option value="1">Nam</option>
                <option value="0">Nữ</option></select>
              </div>

              <div data-mdb-input-init className="form-outline mb-4 mt-4">
                <label className="form-label" for="address">
                  Address
                </label>
                <input
                 value={address}
                 onChange={(e) => setAddress(e.target.value)}
                  type="address"
                  id="address"
                  className="form-control"
                  name="address"
                  placeholder="Enter a valid address"
                />
              </div>

              <div className="mb-3">
              <label htmlFor="image" className="d-inline-block mb-1">
                Image
              </label>
              <input type="file" id="image" className="form-control" />
              </div>
              <div data-mdb-input-init className="form-outline mb-4 mt-4">
                <label className="form-label" for="status">
                  Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  type="status"
                  id="status"
                  className="form-select"
                  name="status"
                > 
                <option value="0">0</option>
                <option value="1">1</option></select>
              </div>

            </div>
          </div>
       
              <form onSubmit={handleSubmit}>
        <div className="text-center text-lg-start mt-4 pt-2 d-flex justify-content-center">
                <button
                  type="submit"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-lg"
                  // style="padding-left: 2.5rem; padding-right: 2.5rem;"
                >
                  Register
                </button>
              </div> 
              <p className="small fw-bold mt-2 pt-1 mb-0 text-center">
              Already have an account?
                <Link
                  to="/login"
                  className="link-danger"
                >
                  Login
                </Link>
              </p>
        </form>
        </div>
        </div>
      </section>
  );
};

export default Register;
