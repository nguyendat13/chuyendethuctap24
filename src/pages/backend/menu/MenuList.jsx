import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MenuService from '../../../services/MenuService'
import { FaEye, FaRegEdit, FaToggleOff, FaToggleOn, FaTrash } from 'react-icons/fa'
import { urlImage } from "../../../config";


const MenuList = () => {
    let{id}=useParams()
    const[menus,setMenus]=useState()
    const[isLoad,setIsload]=useState(0)
  
  useEffect(()=>{
    (async () => {
      const result = await MenuService.getAll();
      setMenus(result.menus);
        console.log(result.menus);
    })();
  },[isLoad]);
  const handleDelete = async(id)=>{
    const result = await MenuService.delete(id)
    if(result.status ===true){
        console.log(result.message)
        setIsload(result.menu)
    }
    window.location.reload()
  }
  return (
    <div>
         <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-9">
                            <ol class="breadcrumb float-sm-right text-end">
                                <li class="breadcrumb-item"><Link to="/admin">Home</Link></li>
                                <li class="breadcrumb-item active">menu Page</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
          <div className="card ">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong><h1>Quản lí menu</h1></strong>
          </div>
      
          <div className="row2 row col-md-6 text-end ">
            <div className='insert col-md-4'>
               <Link to="/admin/menu/create" 
               className="btn btn-sm btn-success  border-0">
              Thêm menu
            </Link></div>
         
            <div className='trash col-md-4'><Link to="/admin/menu/trash/" className="trash btn btn-sm btn-danger  border-0">
            <FaTrash/> Thùng rác
            </Link></div>
            
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
        <div class="col-md-3">
            <form action="#" method="post">
                <div class="accordion " id="accordionExample">
                                        <div class="card mb-3">
                                            <div class="card-header" id="headingCategory">
                                                <a class="d-block text-decoration-none " data-toggle="collapse"
                                                    data-target="#collapseCategory" aria-expanded="true"
                                                    aria-controls="collapseCategory">
                                                    Danh mục
                                                </a>
                                            </div>
                                            <div id="collapseCategory" class="collapse"
                                                aria-labelledby="headingCategory" data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <div class="form-check mb-2">
                                                        <input class="form-check-input" type="checkbox" value="" id="categoryId"/>
                                                        <label class="form-check-label" for="categoryId">
                                                          Default checkbox
                                                        </label>
                                                    </div>
                                                    <div class="mb-3">
                                                        <button type="submit" name="createCategory" class="btn btn-success">Thêm menu</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card mb-3">
                                            <div class="card-header" id="headingBrand">
                                                <a class="d-block text-decoration-none" data-toggle="collapse"
                                                    data-target="#collapseBrand" aria-expanded="true"
                                                    aria-controls="collapseBrand">
                                                    Thuong hiệu
                                                </a>
                                            </div>
                                            <div id="collapseBrand" class="collapse"
                                                aria-labelledby="headingBrand" data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <div class="form-check mb-2">
                                                        <input class="form-check-input" type="checkbox" value="" id="brandId"/>
                                                        <label class="form-check-label" for="brandId">
                                                          Default checkbox
                                                        </label>
                                                    </div>
                                                    <div class="mb-3">
                                                        <button type="submit" name="createBrand" class="btn btn-success">Thêm menu</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card mb-3">
                                            <div class="card-header" id="headingTopic">
                                                <a class="d-block text-decoration-none" data-toggle="collapse"
                                                    data-target="#collapseTopic" aria-expanded="true"
                                                    aria-controls="collapseTopic">
                                                   Chủ đề
                                                </a>
                                            </div>
                                            <div id="collapseTopic" class="collapse"
                                                aria-labelledby="headingTopic" data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <div class="form-check mb-2">
                                                        <input class="form-check-input" type="checkbox" value="" id="topicId"/>
                                                        <label class="form-check-label" for="topicId">
                                                          Default checkbox
                                                        </label>
                                                    </div>
                                                    <div class="mb-3">
                                                        <button type="submit" name="createTopic" class="btn btn-success">Thêm menu</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card mb-3">
                                            <div class="card-header" id="headingPage">
                                                <a class="d-block text-decoration-none" data-toggle="collapse"
                                                    data-target="#collapsePage" aria-expanded="true"
                                                    aria-controls="collapsePage">
                                                    Trang đơn
                                                </a>
                                            </div>
                                            <div id="collapsePage" class="collapse"
                                                aria-labelledby="headingPage" data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <div class="form-check mb-2">
                                                        <input class="form-check-input" type="checkbox" value="" id="pageId"/>
                                                        <label class="form-check-label" for="pageId">
                                                          Default checkbox
                                                        </label>
                                                    </div>
                                                    <div class="mb-3">
                                                        <button type="submit" name="createPage" class="btn btn-success">Thêm menu</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card mb-3">
                                            <div class="card-header" id="headingCustom">
                                                <a class="d-block text-decoration-none" data-toggle="collapse"
                                                    data-target="#collapseCustom" aria-expanded="true"
                                                    aria-controls="collapseCustom">
                                                    Tùy liên kết
                                                </a>
                                            </div>
                                            <div id="collapseCustom" class="collapse"
                                                aria-labelledby="headingCustom" data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <div class="mb-3">
                                                        <label for="name">Tên menu</label>
                                                        <input type="text" value="" name="name" id="name" class="form-control"/>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="link">Liên kết</label>
                                                        <input type="text" value="" name="link" id="link" class="form-control"/>
                                                    </div>
                                                    <div class="mb-3">
                                                        <button type="submit" name="createCustom" class="btn btn-success">Thêm menu</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                </div>
            </form>
        </div>
        <div class="col-md-9">  <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình ảnh</th>
                  <th>Tên</th>
                  <th>Link</th>
                  <th>Vị trí</th>
                  <th>ID</th>
                  <th className=''>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {menus &&
                  menus.length > 0 &&
                  menus.map((menu) => {
                    return (
                      <tr key={menu.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                      <img
                        src={urlImage + "menus/" + menu.image}
                        alt={menu.image}
                        className="img-fluid d-block"
                        style={{ width: "100px" }}
                      />
                    </td>
                        <td>{menu.name}</td>
                        <td>{menu.link}</td>
                        <td>{menu.position}</td>
                        <td>{menu.id}</td>

                        <td className="functional"
                     >   
                         <div className='row col-md-13 text-end'>
                                                <div className='status col-md-2 '><button 
                                            className={menu.status==1?'status-on btn btn-sm btn-success border-0':'status-off btn btn-sm btn-danger  border-0 '}>
                                                    {/* onClick={()=>handleStatus(menu.status)} */}
                                                    {(menu.status==1)?<FaToggleOn />:<FaToggleOff />}
                                                    </button></div>

                                                <div className='eye col-md-2'><Link
                                                    to={"/admin/menu/show/" + menu.id}
                                                    className="btn btn-sm btn-primary border-0"
                                                >
                                                    <FaEye/>
                                                </Link></div>

                                                <div className='regedit col-md-2'><Link
                                                to={"/admin/menu/edit/" + menu.id}
                                                    className="btn btn-sm btn-primary border-0"
                                                >
                                                    <FaRegEdit />
                                                </Link></div>

                                                <div className='trash col-md-2'><Link
                                                    className="btn btn-sm btn-danger border-0"
                                                    onClick={() => handleDelete(menu.id)}
                                                >
                                                    <FaTrash /> 
                                                </Link></div>
                                        </div>
                      </td>
                      </tr>
                    );
                  })}
              </tbody>
        </table></div>
        </div>
      </div>
            </div>
    </div>
  )
}

export default MenuList
