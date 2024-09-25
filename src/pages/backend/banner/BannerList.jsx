import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BannerService from '../../../services/BannerService'
import { FaEye, FaRegEdit, FaToggleOff, FaToggleOn, FaTrash } from 'react-icons/fa'
import { urlImage } from "../../../config";

const BannerList = () => {
    let{id}=useParams()
    const[banners,setBanners]=useState()
    const[isLoad,setIsload]=useState(0)
  
  useEffect(()=>{
    (async () => {
      const result = await BannerService.getAll();
        setBanners(result.banners);
        console.log(result.banners);
    })();
  },[isLoad]);
    const handleStatus=async(id)=>{
        const result = await BannerService.updateStatus(id);
        if(result.status==true)
          { 
            console.log('Thành công')
            setIsload(!isLoad);
          }
      }
      const handleDelete = async (id) => {
        const result = await BannerService.delete(id);
        if (result.status === true) {
          console.log(result.message);
          setIsload(result.brand);
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
                                <li class="breadcrumb-item active">Blank Page</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <div className="card ">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong><h1>Quản lí BANNER</h1></strong>
          </div>
      
          <div className="row2 row col-md-6 text-end ">
            <div className='insert col-md-4'>
               <Link to="/admin/banner/create" 
               className="btn btn-sm btn-success  border-0">
              Thêm Banner
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
                  <th>Tên Banner</th>
                  <th>Vị trí</th>
                  <th>Liên kết</th>
                  <th>ID</th>
                  <th className=''>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {banners &&
                  banners.length > 0 &&
                  banners.map((banner) => {
                    return (
                      <tr key={banner.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                      <img
                        src={urlImage + "banners/" + banner.image}
                        alt={banner.image}
                        className="img-fluid d-block"
                        style={{ width: "100px" }}
                      />
                          </td>
                        <td>{banner.name}</td>
                        <td>{banner.position}</td>
                        <td>{banner.link}</td>
                        <td>{banner.id}</td>
                        <td className="functional"
                     >   
                          <div className='row col-md-8 text-end'>
                                  <div className='status col-md-2 '><button 
                                className={banner.status==1?'status-on btn btn-sm btn-success border-0':'status-off btn btn-sm btn-danger  border-0 '}
                                onClick={(id)=>handleStatus(banner.id)}>
                                    {(banner.status==1)?<FaToggleOn />:<FaToggleOff />}
                                    </button></div>

                                  <div className='eye col-md-2'><Link
                                    to={"/admin/banner/show/" + banner.id}
                                    className="btn btn-sm btn-primary border-0"
                                  >
                                    <FaEye/>
                                  </Link></div>

                                  <div className='regedit col-md-2'><Link
                                  to={"/admin/banner/edit/" + banner.id}
                                    className="btn btn-sm btn-primary border-0"
                                  >
                                    <FaRegEdit />
                                  </Link></div>

                                  <div className='trash col-md-2'><Link
                                    className="btn btn-sm btn-danger border-0"
                                    onClick={() => handleDelete(banner.id)}
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

export default BannerList
