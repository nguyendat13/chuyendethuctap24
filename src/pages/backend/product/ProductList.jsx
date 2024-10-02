import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductService from '../../../services/ProductService'
import { FaEye, FaRegEdit, FaToggleOff, FaToggleOn, FaTrash } from 'react-icons/fa'
import { urlImage } from "../../../config";

const ProductList = () => {
    let{id}=useParams()
    const[products,setProducts]=useState()
    const[isLoad,setIsload]=useState(0)
  
  useEffect(()=>{
    (async () => {
      const result = await ProductService.getAll();
      setProducts(result.products);
        console.log(result.products);
    })();
  },[isLoad]);
  const handleDelete=async(id)=>{
    const result=await ProductService.delete(id)
    console.log(result.message)
    setIsload(result.product)
  }
  return (
    <div>
          <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-9">
                            <ol class="breadcrumb float-sm-right text-end">
                                <li class="breadcrumb-item"><Link to="/admin">Home</Link></li>
                                <li class="breadcrumb-item active">product Page</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        <div className="card ">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong><h1>Quản lí product</h1></strong>
          </div>
      
          <div className="row2 row col-md-6 text-end ">
            <div className='insert col-md-4'>
               <Link to="/admin/product/create" 
               className="btn btn-sm btn-success  bproduct-0">
              Thêm product
            </Link></div>
         
            <div className='trash col-md-4'><Link to="/admin/product/trash/" className="trash btn btn-sm btn-danger">
            <FaTrash/> Thùng rác
            </Link></div>
            
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
            <table className="table table-striped table-bproducted">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Danh mục</th>
                  <th>Thương hiệu</th>
                  <th className='col-md-1'>Mô tả</th>
                  <th>Giá</th>
                  <th>Giá khuyến mãi</th>
                  <th>ID</th>
                  <th className=''>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.length > 0 &&
                  products.map((product) => {
                    return (
                      <tr key={product.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                      <img
                        src={urlImage + "products/" + product.image}
                        alt={product.image}
                        className="img-fluid d-block"
                        style={{ width: "100px" }}
                      />
                    </td>
                        <td>{product.name}</td>
                        <td>{product.category_id}</td>
                        <td>{product.brand_id}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.pricesale}</td>
                        <td>{product.id}</td>

                        <td className="functional"
                     >   
                            <div className='row col-md-16 text-end'>
                                                    <div className='status col-md-2 '><button 
                                                className={product.status==1?'status-on btn btn-sm btn-success bproduct-0':'status-off btn btn-sm btn-danger  bproduct-0 '}>
                                                        {/* onClick={()=>handleStatus(product.status)} */}
                                                        {(product.status==1)?<FaToggleOn />:<FaToggleOff />}
                                                        </button></div>

                                                    <div className='eye col-md-2'><Link
                                                        to={"/admin/product/show/" + product.id}
                                                        className="btn btn-sm btn-primary bproduct-0"
                                                    >
                                                        <FaEye/>
                                                    </Link></div>

                                                    <div className='regedit col-md-2'><Link
                                                    to={"/admin/product/edit/" + product.id}
                                                        className="btn btn-sm btn-primary bproduct-0"
                                                    >
                                                        <FaRegEdit />
                                                    </Link></div>

                                                    <div className='trash col-md-2'><Link
                                                        className="btn btn-sm btn-danger bproduct-0"
                                                        onClick={() => handleDelete(product.id)}
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

export default ProductList
