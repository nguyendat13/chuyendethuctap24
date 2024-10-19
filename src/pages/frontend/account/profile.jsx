import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
   const [userData, setUserData] = useState({});
   const navigate = useNavigate();

  

   const handleLogout = () => {
       localStorage.clear();
       sessionStorage.clear();
       navigate("/");
   };

   return (
       <section className="profile-maincontent py-2">
           <div className="container">
               <div className="row">
                   <div className="col-md-9 order-1 order-md-2">
                       <h1 className="fs-2 text-main">Thông tin tài khoản</h1>
                       <table className="table table-borderless">
                           <tbody>
                               <tr>
                                   <td>Tên tài khoản</td>
                                   <td>{userData.name || "N/A"}</td>
                               </tr>
                               <tr>
                                   <td>Tên đăng nhập</td>
                                   <td>
                                       {userData.username || "N/A"}{" "}
                                       <Link to="/change-password">Đổi mật khẩu</Link>
                                   </td>
                               </tr>
                               <tr>
                                   <td>Email</td>
                                   <td>{userData.email || "N/A"}</td>
                               </tr>
                               <tr>
                                   <td>Điện thoại</td>
                                   <td>{userData.phone || "N/A"}</td>
                               </tr>
                               <tr>
                                   <td>Địa chỉ</td>
                                   <td>
                                       {userData.address || "N/A"}{" "}
                                       <Link to="/edit-profile">Đổi địa chỉ</Link>
                                   </td>
                               </tr>
                           </tbody>
                       </table>
                       <button className="btn btn-danger" onClick={handleLogout}>
                           Logout
                       </button>
                   </div>
               </div>
           </div>
       </section>
   );
};


export default Profile;
