import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CategoryService from '../../../services/CategoryService'
import { FaEye, FaRegEdit, FaToggleOff, FaToggleOn, FaTrash } from 'react-icons/fa'
import { urlImage } from "../../../config";

const CategoryList = () => {
    let{id}=useParams()
    const[categorys,setCategorys]=useState()
    const[isLoad,setIsload]=useState(0)
  
  useEffect(()=>{
    (async () => {
      const result = await CategoryService.getAll();
      setCategorys(result.categorys);
        console.log(result.categorys);
    })();
  },[isLoad]);
    const handleStatus=async(id)=>{
        const result = await CategoryService.updateStatus(id);
        if(result.status==true)
          { 
            console.log('Thành công')
            setIsload(!isLoad);
          }
      }
      const handleDelete = async (id) => {
        const result = await CategoryService.delete(id);
        if (result.status === true) {
          console.log(result.message);
          setIsload(result.category);
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
                                <li class="breadcrumb-item active">Category Page</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
          <div className="card ">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong><h1>Quản lí category</h1></strong>
          </div>
      
          <div className="row2 row col-md-6 text-end ">
            <div className='insert col-md-4'>
               <Link to="/admin/category/create" 
               className="btn btn-sm btn-success  border-0">
              Thêm category
            </Link></div>
         
            <div className='trash col-md-4'><Link to="/admin/category/trash/" className="trash btn btn-sm btn-danger  border-0">
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
                  <th>Tên category</th>
                  <th>Mô tả</th>
                  <th>ID</th>
                  <th className=''>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {categorys &&
                  categorys.length > 0 &&
                  categorys.map((category) => {
                    return (
                      <tr key={category.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                      <img
                        src={urlImage + "categorys/" + category.image}
                        alt={category.image}
                        className="img-fluid d-block"
                        style={{ width: "100px" }}
                      />
                    </td>
                        <td>{category.name}</td>
                        <td>{category.description}</td>
                        <td>{category.id}</td>
                        <td className="functional"
                     >   
                          <div className='row col-md-8 text-end'>
                                  <div className='status col-md-2 '><button 
                            className={category.status==1?'status-on btn btn-sm btn-success border-0':'status-off btn btn-sm btn-danger  border-0 '}
                                onClick={()=>handleStatus(category.status)}>
                                  {(category.status==1)?<FaToggleOn />:<FaToggleOff />} 
                                    </button></div>

                                  <div className='eye col-md-2'><Link
                                    to={"/admin/category/show/" + category.id}
                                    className="btn btn-sm btn-primary border-0"
                                  >
                                    <FaEye/>
                                  </Link></div>

                                  <div className='regedit col-md-2'><Link
                                  to={"/admin/category/edit/" + category.id}
                                    className="btn btn-sm btn-primary border-0"
                                  >
                                    <FaRegEdit />
                                  </Link></div>

                                  <div className='trash col-md-2'><Link
                                    className="btn btn-sm btn-danger border-0"
                                    onClick={() => handleDelete(category.id)}
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

export default CategoryList
