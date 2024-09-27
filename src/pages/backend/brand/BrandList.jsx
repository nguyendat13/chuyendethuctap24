import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BrandService from '../../../services/BrandService'
import { urlImage } from '../../../config'
import {FaToggleOff, FaEye, FaRegEdit, FaTrash, FaToggleOn } from 'react-icons/fa'
const BrandList = () => {
    const {id}=useParams()
    const [brands,setBrands]=useState("")
    const[isload,setIsload]=useState("")
  
    useEffect(()=>{
        (async()=>{
            const result = await BrandService.getAll()
            setBrands(result.brands)
            console.log(result.brands)
    })()
    },[isload])
   
    const handleDelete =async(id)=>{
        const result=await BrandService.delete(id)
        if(result.status === true){
            console.log(result.message)
            setIsload(result.brand)
        }
        window.location.reload();

    }
  return (
    <div>
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                            <li className="breadcrumb-item active">Brand Page</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="card">
                    <div className="card-header">
                    <div className="row">   
                    <div className="col-md-6">
                         <strong><h1>Quản lí Brand</h1></strong>
                    </div>
         
                        <div className="row2 row col-md-6 text-end ">
                            <div className='insert col-md-4'>
                            <Link to="/admin/brand/create" 
                            className="btn btn-sm btn-success  border-0">
                            Thêm brand
                            </Link></div>
                        
                            <div className='trash col-md-4'><Link to="/admin/brand/trash/" className="trash btn btn-sm btn-danger  border-0">
                            <FaTrash/> Thùng rác
                            </Link></div>
            
                 </div>
                         </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                      
                            <div className="col-md-12">
                                <table className="table table-bordered table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th className="text-center">#</th>
                                            <th className="text-center" >Hình</th>
                                            <th>Tên thương hiêu</th>
                                            <th>Mô tả</th>
                                            <th className="text-center" >ID</th>
                                            <th className="text-center col-md-4" >Chức năng</th>
                                      
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                        brands && brands.length >0 &&
                                        brands.map((brand)=>{
                                            return (
                                                <tr key={brand.id}>
                                        <td>
                                            <input type="checkbox" />
                                            </td>
                                        <td>
                                            <img
                                                src={urlImage + "brands/" + brand.image}
                                                alt={brand.image}
                                                className="img-fluid d-block"
                                                style={{ width: "100px" }}
                                            />
                                         </td>
                                    <td>{brand.name}</td>
                                    <td>{brand.description}</td>
                                    <td>{brand.id}</td>
                                    <td className="functional">
                                        <div className='row col-md-12  text-end'>
                                                <div className='status col-md-2 '><button 
                                            className={brand.status==1?'status-on btn btn-sm btn-success border-0':'status-off btn btn-sm btn-danger  border-0 '}>
                                                    {/* onClick={()=>handleStatus(brand.status)} */}
                                                    {(brand.status==1)?<FaToggleOn />:<FaToggleOff />}
                                                    </button></div>

                                                <div className='eye col-md-2'><Link
                                                    to={"/admin/brand/show/" + brand.id}
                                                    className="btn btn-sm btn-primary border-0"
                                                >
                                                    <FaEye/>
                                                </Link></div>

                                                <div className='regedit col-md-2'><Link
                                                to={"/admin/brand/edit/" + brand.id}
                                                    className="btn btn-sm btn-primary border-0"
                                                >
                                                    <FaRegEdit />
                                                </Link></div>

                                                <div className='trash col-md-2'><Link
                                                    className="btn btn-sm btn-danger border-0"
                                                    onClick={() => handleDelete(brand.id)}
                                                >
                                                    <FaTrash /> 
                                                </Link></div>
                                        </div>
                                    </td>
                                            </tr>
    
                                            )
                                        })}
                                
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default BrandList
