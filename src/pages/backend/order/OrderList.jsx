import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import OrderService from '../../../services/OrderService'
import { FaEye, FaRegEdit, FaToggleOff, FaToggleOn, FaTrash } from 'react-icons/fa'
import { urlImage } from "../../../config";

const OrderList = () => {
    let{id}=useParams()
    const[orders,setOrders]=useState()
    const[isLoad,setIsload]=useState(0)
  
  useEffect(()=>{
    (async () => {
      const result = await OrderService.getAll();
      setOrders(result.orders);
        console.log(result.orders);
    })();
  },[isLoad]);
  const handleDelete = async(id)=>{
    const result=await OrderService.delete(id)
    console.log(result.message)
    setIsload(result.order)
  }
  return (
    <div>
        <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-9">
                            <ol class="breadcrumb float-sm-right text-end">
                                <li class="breadcrumb-item"><Link to="/admin">Home</Link></li>
                                <li class="breadcrumb-item active">order Page</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        <div className="card ">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong><h1>Quản lí order</h1></strong>
          </div>
      
          <div className="row2 row col-md-6 text-end ">
            <div className='insert col-md-4'>
               <Link to="/admin/order/create" 
               className="btn btn-sm btn-success  border-0">
              Thêm order
            </Link></div>
         
            <div className='trash col-md-4'><Link to="/admin/order/trash/" className="trash btn btn-sm btn-danger  border-0">
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
                  <th>Địa chỉ</th>
                  <th>Ghi chú</th>
                  <th>Ngày tạo</th>
                  <th>ID</th>
                  <th className=''>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {orders &&
                  orders.length > 0 &&
                  orders.map((order) => {
                    return (
                      <tr key={order.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                      <img
                        src={urlImage + "orders/" + order.image}
                        alt={order.image}
                        className="img-fluid d-block"
                        style={{ width: "100px" }}
                      />
                    </td>
                        <td>{order.delivery_name}</td>
                        <td>{order.delivery_email}</td>
                        <td>{order.delivery_phone}</td>
                        <td>{order.delivery_address}</td>
                        <td>{order.note}</td>
                        <td>{order.created_at}</td>
                        <td>{order.id}</td>

                        <td className="functional"
                     >   
                         <div className='row col-md-13 text-end'>
                                                <div className='status col-md-2 '><button 
                                            className={order.status==1?'status-on btn btn-sm btn-success border-0':'status-off btn btn-sm btn-danger  border-0 '}>
                                                    {/* onClick={()=>handleStatus(order.status)} */}
                                                    {(order.status==1)?<FaToggleOn />:<FaToggleOff />}
                                                    </button></div>

                                                <div className='eye col-md-2'><Link
                                                    to={"/admin/order/show/" + order.id}
                                                    className="btn btn-sm btn-primary border-0"
                                                >
                                                    <FaEye/>
                                                </Link></div>

                                                <div className='regedit col-md-2'><Link
                                                to={"/admin/order/edit/" + order.id}
                                                    className="btn btn-sm btn-primary border-0"
                                                >
                                                    <FaRegEdit />
                                                </Link></div>

                                                <div className='trash col-md-2'><Link
                                                    className="btn btn-sm btn-danger border-0"
                                                    onClick={() => handleDelete(order.id)}
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

export default OrderList
