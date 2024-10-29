import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import UserService from "../../../services/UserService";

const Profile = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [userData, setUserData] = useState(null); // Khởi tạo là null thay vì {}
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await UserService.show(id);
        console.log("Fetched user:", result);
        setUserData(result.order); // Đúng key trả về từ API
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchUser(); // Chỉ fetch nếu có id
  }, [id]);

  if (loading) return <p>Đang tải...</p>;
  if (!userData) return <p>Không tìm thấy tài khoản!</p>; // Xử lý khi không có dữ liệu

  return (
    <section className="profile-maincontent py-2">
      <div className="container">
        <h1 className="fs-2">Thông Tin Tài Khoản</h1>
        <table className="table table-borderless">
          <tbody>
            <tr>
              <td>Tên Tài Khoản</td>
              <td>{userData.name || 'N/A'}</td>
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
