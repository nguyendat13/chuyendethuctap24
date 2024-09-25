import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import TopicService from '../../../services/TopicService'
import { FaEye, FaRegEdit, FaToggleOff, FaToggleOn, FaTrash } from 'react-icons/fa'
import { urlImage } from "../../../config";


const TopicList = () => {
    let{id}=useParams()
    const[topics,setTopics]=useState()
    const[isLoad,setIsload]=useState(0)
  
  useEffect(()=>{
    (async () => {
      const result = await TopicService.getAll();
      setTopics(result.topics);
        console.log(result.topics);
    })();
  },[isLoad]);
  const handleDelete=async(id)=>{
    const result=await TopicService.delete(id)
    console.log(result.message)
    setIsload(result.topic)
  }
  return (
    <div>
        <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-9">
                            <ol class="breadcrumb float-sm-right text-end">
                                <li class="breadcrumb-item"><Link to="/admin">Home</Link></li>
                                <li class="breadcrumb-item active">topic Page</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        <div className="card ">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong><h1>Quản lí topic</h1></strong>
          </div>
      
          <div className="row2 row col-md-6 text-end ">
            <div className='insert col-md-4'>
               <Link to="/admin/topic/create" 
               className="btn btn-sm btn-success  btopic-0">
              Thêm topic
            </Link></div>
         
            <div className='trash col-md-4'><Link to="/admin/topic/trash/" className="trash btn btn-sm btn-danger  btopic-0">
            <FaTrash/> Thùng rác
            </Link></div>
            
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
            <table className="table table-striped table-btopiced">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình ảnh</th>
                  <th>Tên chủ đề</th>
                  <th>Slug</th>
                  <th>Mô tả</th>
                  <th>ID</th>
                  <th className=''>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {topics &&
                  topics.length > 0 &&
                  topics.map((topic) => {
                    return (
                      <tr key={topic.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                      <img
                        src={urlImage + "sliders/" + topic.image}
                        alt={topic.image}
                        className="img-fluid d-block"
                        style={{ width: "100px" }}
                      />
                    </td>
                        <td>{topic.name}</td>
                        <td>{topic.slug}</td>
                        <td>{topic.description}</td>
                        <td>{topic.id}</td>

                        <td className="functional"
                     >   
                            <div className='row col-md-9 text-end'>
                                                    <div className='status col-md-2 '><button 
                                                className={topic.status==1?'status-on btn btn-sm btn-success btopic-0':'status-off btn btn-sm btn-danger  btopic-0 '}>
                                                        {/* onClick={()=>handleStatus(topic.status)} */}
                                                        {(topic.status==1)?<FaToggleOn />:<FaToggleOff />}
                                                        </button></div>

                                                    <div className='eye col-md-2'><Link
                                                        to={"/admin/topic/show/" + topic.id}
                                                        className="btn btn-sm btn-primary btopic-0"
                                                    >
                                                        <FaEye/>
                                                    </Link></div>

                                                    <div className='regedit col-md-2'><Link
                                                    to={"/admin/topic/edit/" + topic.id}
                                                        className="btn btn-sm btn-primary btopic-0"
                                                    >
                                                        <FaRegEdit />
                                                    </Link></div>

                                                    <div className='trash col-md-2'><Link
                                                        className="btn btn-sm btn-danger btopic-0"
                                                        onClick={() => handleDelete(topic.id)}
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

export default TopicList
