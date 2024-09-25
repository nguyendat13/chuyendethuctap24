import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ContactService from '../../../services/ContactService'
import { FaEye, FaRegEdit, FaToggleOff, FaToggleOn, FaTrash } from 'react-icons/fa'
import { urlImage } from "../../../config";

const ContactList = () => {
    let{id}=useParams()
    const[contacts,setContacts]=useState()
    const[isLoad,setIsload]=useState(0)
  
  useEffect(()=>{
    (async () => {
      const result = await ContactService.getAll();
      setContacts(result.contacts);
        console.log(result.contacts);
    })();
  },[isLoad]);

  const handleDelete = async (id) => {
    const result = await ContactService.delete(id);
    if (result.status === true) {
      console.log(result.message)
      setIsload(result.contact)
    }
    window.location.reload();
  };
  return (
    <div>
        <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-9">
                            <ol class="breadcrumb float-sm-right text-end">
                                <li class="breadcrumb-item"><Link to="/admin">Home</Link></li>
                                <li class="breadcrumb-item active">contact Page</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
          <div className="card ">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong><h1>Quản lí contact</h1></strong>
          </div>
      
          <div className="row2 row col-md-6 text-end ">
            <div className='insert col-md-4'>
               <Link to="/admin/contact/create" 
               className="btn btn-sm btn-success  border-0">
              Thêm contact
            </Link></div>
         
            <div className='trash col-md-4'><Link to="/admin/contact/trash/" className="trash btn btn-sm btn-danger  border-0">
            <FaTrash/> Thùng rác
            </Link></div>
            
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình ảnh</th>
                  <th>Tên</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th>Tiêu đề</th>
                  <th>Nội dung</th>
                  <th>ID</th>
                  <th className=''>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {contacts &&
                  contacts.length > 0 &&
                  contacts.map((contact) => {
                    return (
                      <tr key={contact.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                      <img
                        src={urlImage + "contacts/" + contact.image}
                        alt={contact.image}
                        className="img-fluid d-block"
                        style={{ width: "100px" }}
                      />
                    </td>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.title}</td>
                        <td>{contact.content}</td>
                        <td>{contact.id}</td>

                        <td className="functional"
                     >   
                         <div className='row col-md-10 text-end'>
                                                <div className='status col-md-2 '><button 
                                            className={contact.status==1?'status-on btn btn-sm btn-success border-0':'status-off btn btn-sm btn-danger  border-0 '}>
                                                    {/* onClick={()=>handleStatus(contact.status)} */}
                                                    {(contact.status==1)?<FaToggleOn />:<FaToggleOff />}
                                                    </button></div>

                                                <div className='eye col-md-2'><Link
                                                    to={"/admin/contact/show/" + contact.id}
                                                    className="btn btn-sm btn-primary border-0"
                                                >
                                                    <FaEye/>
                                                </Link></div>

                                                <div className='regedit col-md-2'><Link
                                                to={"/admin/contact/edit/" + contact.id}
                                                    className="btn btn-sm btn-primary border-0"
                                                >
                                                    <FaRegEdit />
                                                </Link ></div>
                                                <div className='trash col-md-2'><Link
                                                    className="btn btn-sm btn-danger border-0"
                                                    onClick={() => handleDelete(contact.id)}
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

export default ContactList
