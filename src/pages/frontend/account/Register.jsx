    import { useState, useEffect } from "react";
    import { Link, useNavigate } from "react-router-dom";
    import UserService from "../../../services/UserService";
    import LogoLogin from "../../../assets/images/logo_login.webp";
    import SignWithOther from "./SignWithOther";

    const Register = () => {
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [repassword, setRepassword] = useState("");
        const [email, setEmail] = useState("");
        const [phone, setPhone] = useState("");
        const [name, setName] = useState("");
        const [gender, setGender] = useState(1);
        const [address, setAddress] = useState("");
        const [errors, setErrors] = useState({});
        const navigate = useNavigate();
        const [insertId, setInsertId] = useState(0);
        const [status, setStatus] = useState(2);

        // Fetch existing users on component mount
   
        const handleSubmit = async (event) => {
            event.preventDefault();

        //     const handleCheckDuplicate = async () => {
        //         try {
        //             const response = await UserService.checkDuplicate(email, phone);
            
        //             // Kiểm tra phản hồi có hợp lệ không
        //             if (!response || !response.data) {
        //                 setErrors({ general: "Lỗi hệ thống. Vui lòng thử lại sau." });
        //                 return false;
        //             }
            
        //             if (!response.data.status) {
        //                 setErrors({ general: response.data.message });
        //                 return false; // Ngừng nếu có trùng lặp
        //             }
            
        //             return true; // Tiếp tục nếu không trùng lặp
        //         } catch (error) {
        //             console.error("Lỗi khi kiểm tra trùng lặp:", error);
        //             setErrors({ general: "Lỗi hệ thống. Vui lòng thử lại sau." });
        //             return false;
        //         }
        //     };
            

        // console.log("Đang kiểm tra trùng lặp email và số điện thoại...");

        // const isValid = await handleCheckDuplicate();  // Đợi kết quả kiểm tra
        // if (!isValid) {
        //     alert("Email hoặc phone đã tồn tại")
        //     console.log("Email hoặc số điện thoại đã tồn tại.");
        //     return;  // Ngừng đăng ký nếu trùng lặp
        // }

        // console.log("Không có trùng lặp, tiếp tục đăng ký...");

            const image = document.querySelector("#image");

            // Validate input fields
            const newErrors = {};
            if (!username) newErrors.username = "Username is required.";
            if (!email) newErrors.email = "Email is required.";
            if (!password) newErrors.password = "Password is required.";
            if (!repassword) newErrors.repassword = "Password confirmation is required.";

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return;
            }

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
                alert("Passwords must be at least 8 characters, including uppercase, lowercase, numbers, and special characters.");
                return;
            }

            if (repassword !== password) {
                alert("The confirmation password is incorrect.");
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
            user.append("address", address);
            user.append("status", status);
            user.append("image", image.files.length === 0 ? "" : image.files[0]);

            console.log("Dữ liệu người dùng:", user);
            // Submit form using UserService
            (async () => {
                const result = await UserService.store(user);
                console.log("Kết quả đăng ký:", result);
            
                if (result.status === true) {
                    alert(result.message);
                    setInsertId(result.user.insertId);
                    navigate("/login");
                } else {
                    setErrors({ general: result.message });
                }
            })();
        };

        return (
            <section className="signup container py-5">
                <div className="container-fluid h-custom py-5">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src={LogoLogin} className="img-fluid" alt="Logo" />
                        </div>
                        <SignWithOther />
                        <div className="col-md-12">
                            <form onSubmit={handleSubmit}>
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
                                            {errors.repassword && <span className="text-danger">{errors.repassword}</span>}
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
                                                placeholder="Enter a valid phone"
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
                                                onChange={(e) => setGender(Number(e.target.value))}
                                                id="gender"
                                                className="form-select"
                                                name="gender"
                                            >
                                                <option value="" disabled>Chọn giới tính</option>
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
                                    </div>
                                </div>
                             
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                </div>
                                <p className="small fw-bold mt-2 pt-1 mb-0 text-center">
                                    Already have an account?
                                    <Link to="/login" className="link-danger">Login</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    export default Register;



  
    