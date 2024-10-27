import { useState } from "react";
import { Link } from "react-router-dom";
import UserService from "../../../services/UserService";
const UserCreate = () => {
  const [insertId, setInsertId] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  // const [roles, setRoles] = useState("admin");
  const [gender, setGender] = useState(1);
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState(2);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const image = document.querySelector("#image");
  
    // Validate input fields
    if (!username || !email || !password || !repassword) {
      alert("Please fill in all required fields.");
      return;
    }
  
    if (password !== repassword) {
      alert("Password confirmation does not match.");
      return;
    }
  
    // Create a form data object
    const user = new FormData();
    user.append("username", username);
    user.append("password", password);
    user.append("repassword", repassword);
    user.append("email", email);
    user.append("phone", phone);
    user.append("name", name);
    user.append("gender", gender);
    // user.append("roles", roles);
    user.append("address", address);
    user.append("status", status);
    user.append("image", image.files.length === 0 ? "" : image.files[0]);
  
    // Submit form using UserService
    (async () => {
      const result = await UserService.store(user);
      if (result.status === true) {
        alert(result.message);
        setInsertId(result.user.insertId);
        console.log(result.user);
        window.location.href = "/admin/user";
      }
    })();
  };
  
  return (
    <div className="bg-light p-3">
      <section className="content-header my-2">
        <h3 className="d-inline">Thêm thành viên</h3>
        <form onSubmit={handleSubmit}>
          <div className="row mt-2 align-items-center">
            <div className="col-md-12 text-end">
              <button className="btn btn-success btn-sm">
                <i className="fa fa-save"></i> Lưu [Thêm]
              </button>
              <Link to={"/admin/user"} className="btn btn-primary btn-sm ms-2">
                <i className="fa fa-arrow-left"></i> Về danh sách
              </Link>
            </div>
          </div>
        </form>
      </section>
      <section className="content-body my-2">
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label>
                  <strong>Tên đăng nhập(*)</strong>
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className="form-control"
                  placeholder="Tên đăng nhập"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Mật khẩu(*)</strong>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="form-control"
                  placeholder="Mật khẩu"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Xác nhận mật khẩu(*)</strong>
                </label>
                <input
                  type="password"
                  value={repassword}
                  onChange={(event) => setRepassword(event.target.value)}
                  className="form-control"
                  placeholder="Xác nhận mật khẩu"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Email(*)</strong>
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Email"
                />
              </div>
          
              <div className="mb-3">
                <label>
                  <strong>Điện thoại(*)</strong>
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                  placeholder="Điện thoại"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label>
                  <strong>Họ tên (*)</strong>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  placeholder="Họ tên"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Giới tính</strong>
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  name="gender"
                  id="gender"
                  className="form-select"
                >
                  <option>Chọn giới tính</option>
                  <option value="1">Nam</option>
                  <option value="0">Nữ</option>
                </select>
              </div>
              <div className="mb-3">
                <label>
                  <strong>Địa chỉ</strong>
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control"
                  placeholder="Địa chỉ"
                />
              </div>
              <div className="mb-3">
              <label htmlFor="image" className="d-inline-block mb-1">
                Image
              </label>
              <input type="file" id="image" className="form-control" />
              </div>
              {/* <div className="mb-3">
                <label>
                  <strong>Roles</strong>
                </label>
                <select
                  value={roles}
                  onChange={(e) => setRoles(e.target.value)}
                  className="form-select"
                >
                  <option value="1">Admin</option>
                  <option value="2">User</option>
                </select>
              </div> */}
              <div className="mb-3">
                <label>
                  <strong>Trạng thái</strong>
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-select"
                >
                  <option value="1">Xuất bản</option>
                  <option value="2">Chưa xuất bản</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UserCreate;