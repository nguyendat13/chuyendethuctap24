import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../../../services/UserService'; // Dịch vụ lấy thông tin người dùng

const Profile = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("userData");

    if (!user) {
      alert("Bạn chưa đăng nhập. Vui lòng đăng nhập lại.");
      navigate("/login");
    } else {
      const parsedUser = JSON.parse(user);
      console.log("Parsed User Data:", parsedUser); // Check the data structure
      setUserData(parsedUser);
    }
  }, [navigate]);
 

  return (
    <section className="profile-maincontent py-2">
      <div className="container">
        <h1 className="fs-2">Thông Tin Tài Khoản</h1>
        <table className="table table-borderless">
          <tbody>
            <tr>
              <td>Tên Tài Khoản</td>
              <td>{userData.username || 'N/A'}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{userData.email || 'N/A'}</td>
            </tr>
            <tr>
              <td>Số Điện Thoại</td>
              <td>{userData.phone || 'N/A'}</td>
            </tr>
            <tr>
              <td>Địa Chỉ</td>
              <td>
                {userData.address || 'N/A'}{' '}
                <Link to="/edit-profile">Chỉnh Sửa Địa Chỉ</Link>
              </td>
            </tr>
          </tbody>
        </table>
       
      </div>
    </section>
  );
};

export default Profile;
