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
        <h1 className="fs-2">User Information</h1>
        <table className="table table-borderless">
          <tbody>
            <tr>
              <td>User Name</td>
              <td>{userData.username || 'N/A'}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{userData.email || 'N/A'}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{userData.phone || 'N/A'}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                {userData.address || 'N/A'}{' '}
                <Link to="/edit-profile">Edit</Link>
              </td>
            </tr>
          </tbody>
        </table>
       
      </div>
    </section>
  );
};

export default Profile;
