import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import UserService from '../../../services/UserService'
import { FaEye, FaRegEdit, FaToggleOff, FaToggleOn, FaTrash } from 'react-icons/fa'
import { urlImage } from "../../../config";
const UserList = () => {
    let{id}=useParams()
    const[users,setUsers]=useState()
    const[isLoad,setIsload]=useState(0)
  
  useEffect(()=>{
    (async () => {
      const result = await UserService.getAll();
      setUsers(result.users);
      console.log(result.users);
    })();
  },[isLoad]);
  const handleDelete=async(id)=>{
    const result=await UserService.delete(id)
    console.log(result.message)
    setIsload(result.user)
  }
  return (
    <div>
      <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-9">
                            <ol class="breadcrumb float-sm-right text-end">
                                <li class="breadcrumb-item"><Link to="/admin">Home</Link></li>
                                <li class="breadcrumb-item active">user Page</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        <div className="card ">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong><h1>Quản lí user</h1></strong>
          </div>
      
          <div className="row2 row col-md-6 text-end ">
            <div className='insert col-md-4'>
               <Link to="/admin/user/create" 
               className="btn btn-sm btn-success  buser-0">
              Thêm user
            </Link></div>
         
            <div className='trash col-md-4'><Link to="/admin/user/trash/" className="trash btn btn-sm btn-danger  buser-0">
            <FaTrash/> Thùng rác
            </Link></div>
            
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
            <table className="table table-striped table-busered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình ảnh</th>
                  <th>Tên</th>
                  <th>User Name</th>
                  <th className=''>Password</th>
                  <th>Số điện thoại</th>
                  <th>Email</th>
                  <th>Địa chỉ</th>

                  <th>ID</th>
                  <th className='col-md-4'>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.length > 0 &&
                  users.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                      <img
                        src={urlImage + "users/" + user.image}
                        alt={user.image}
                        className="img-fluid d-block"
                        style={{ width: "100px" }}
                      />
                    </td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>

                        <td>{user.id}</td>

                        <td className="functional"
                     >   
                            <div className='row col-md-14 text-end'>
                                                    <div className='status col-md-2 '><button 
                                                className={user.status==1?'status-on btn btn-sm btn-success buser-0':'status-off btn btn-sm btn-danger  buser-0 '}>
                                                        {/* onClick={()=>handleStatus(user.status)} */}
                                                        {(user.status==1)?<FaToggleOn />:<FaToggleOff />}
                                                        </button></div>

                                                    <div className='eye col-md-2'><Link
                                                        to={"/admin/user/show/" + user.id}
                                                        className="btn btn-sm btn-primary buser-0"
                                                    >
                                                        <FaEye/>
                                                    </Link></div>

                                                    <div className='regedit col-md-2'><Link
                                                    to={"/admin/user/edit/" + user.id}
                                                        className="btn btn-sm btn-primary buser-0"
                                                    >
                                                        <FaRegEdit />
                                                    </Link></div>

                                                    <div className='trash col-md-2'><Link
                                                        className="btn btn-sm btn-danger buser-0"
                                                        onClick={() => handleDelete(user.id)}
                                                    >
                                                        <FaTrash /> 
                                                    </Link></div>
                            </div>
                      </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
        </div>
      </div>
            </div>
    </div>
  )
}

export default UserList
