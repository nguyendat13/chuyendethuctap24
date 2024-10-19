import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PostService from '../../../services/PostService'
import { FaEye, FaRegEdit, FaToggleOff, FaToggleOn, FaTrash } from 'react-icons/fa'
import { urlImage } from "../../../config";


const PostList = () => {
    let{id}=useParams()
    const[posts,setPosts]=useState()
    const[isLoad,setIsload]=useState(0)
  
  useEffect(()=>{
    (async () => {
      const result = await PostService.getAll();
      setPosts(result.posts);
        console.log(result.posts);
    })();
  },[isLoad]);
  const handleDelete=async(id)=>{
    const result= await PostService.delete(id)
    console.log(result.message)
    setIsload(result.post)
  }
  return (
    <div>
       <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-9">
                            <ol class="breadcrumb float-sm-right text-end">
                                <li class="breadcrumb-item"><Link to="/admin">Home</Link></li>
                                <li class="breadcrumb-item active">post Page</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        <div className="card ">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong><h1>Quản lí post</h1></strong>
          </div>
      
          <div className="row2 row col-md-6 text-end ">
            <div className='insert col-md-4'>
               <Link to="/admin/post/create" 
               className="btn btn-sm btn-success  bpost-0">
              Thêm post
            </Link></div>
         
            <div className='trash col-md-4'><Link to="/admin/post/trash/" className="trash btn btn-sm btn-danger  bpost-0">
            <FaTrash/> Thùng rác
            </Link></div>
            
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
            <table className="table table-striped table-bposted">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình ảnh</th>
                  <th>Tiêu đề</th>
                  <th>Chi tiết</th>
                  <th>Mô tả</th>
                  <th>Kiểu</th>
                  <th>ID</th>
                  <th className=''>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {posts &&
                  posts.length > 0 &&
                  posts.map((post) => {
                    return (
                      <tr key={post.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                      <img
                        src={urlImage + "posts/" + post.image}
                        alt={post.image}
                        className="img-fluid d-block"
                        style={{ width: "100px" }}
                      />
                    </td>
                        <td className='col-2'>{post.title}</td>
                        <td className='col-2'>{post.detail}</td>
                        <td className='col-2'>{post.description}</td>
                        <td>{post.type}</td>
                        <td>{post.id}</td>

                        <td className="functional col-4"
                     >   
                            <div className='row col-md-10 text-end'>
                                                    <div className='status col-md-2 '><button 
                                                className={post.status==1?'status-on btn btn-sm btn-success bpost-0':'status-off btn btn-sm btn-danger  bpost-0 '}>
                                                        {/* onClick={()=>handleStatus(post.status)} */}
                                                        {(post.status==1)?<FaToggleOn />:<FaToggleOff />}
                                                        </button></div>

                                                    <div className='eye col-md-2'><Link
                                                        to={"/admin/post/show/" + post.id}
                                                        className="btn btn-sm btn-primary bpost-0"
                                                    >
                                                        <FaEye/>
                                                    </Link></div>

                                                    <div className='regedit col-md-2'><Link
                                                    to={"/admin/post/edit/" + post.id}
                                                        className="btn btn-sm btn-primary bpost-0"
                                                    >
                                                        <FaRegEdit />
                                                    </Link></div>

                                                    <div className='trash col-md-2'><Link
                                                        className="btn btn-sm btn-danger bpost-0"
                                                        onClick={() => handleDelete(post.id)}
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

export default PostList
