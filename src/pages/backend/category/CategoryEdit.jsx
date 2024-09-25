import React, { useEffect, useState } from 'react'
import CategoryService from '../../../services/CategoryService'
import { Link, useParams } from "react-router-dom";

const CategoryEdit = () => {
  //khai bao status
  const [categorys, setCategorys] = useState("");//list
  const [isLoad,setIsload]=useState(0);
  const [category, setCategory] = useState("");//list

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [parent_id, setParentId] = useState(0);
  const [sort_order, setSortOrder] = useState(0);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(2);
  //lay id---cal api
  const{id}=useParams();
  useEffect(() => {
    (async () => {
      const results = await CategoryService.getAll();
        setCategorys(results.categorys);
        console.log(results.message);
    })();
  }, []);
  useEffect(()=>{
    (async () => {
      const result = await CategoryService.show(id);
          // If result.category is an array, convert it to an object
          const categoryObject = Array.isArray(result.category)
            ? result.category[0]
            : result.category;
          setCategory(categoryObject);
          console.log(categoryObject);
          setName(categoryObject.name);
          setSlug(categoryObject.slug);
          setDescription(categoryObject.description);
          setStatus(categoryObject.status);
          setParentId(categoryObject.parent_id);
        }
    )();
  },[])
 

  const handleUpdate = (e) => {
    e.preventDefault();
const image = document.querySelector("#image");
const category= new FormData();
category.append("name",name);
category.append("parent_id",parent_id);
category.append("sort_order",sort_order);
category.append("description",description);
category.append("image", image.files.length === 0 ? "" : image.files[0]);
category.append("status",status);
( async function (data,id){
  const result= await CategoryService.edit(data,id);
  if (result.status === true) { 
    setIsload(result.category.isLoad);
    console.log(result.message);  
   window.location.href = "/admin/category";
  }
})();
  }
  return (
    <div className="card">
    <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quản lí danh mục</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/admin/category" className="btn btn-sm btn-danger">
             Về danh sách
            </Link>
          </div>
        </div>
      </div>
    <div className="card-body">
      <div className='row'>
      <div className='col-md-12'>
        <form onSubmit={handleUpdate}>
            <div className="mb-2">
              <label htmlFor="name" className="d-inline-block mb-2">
                Tên
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-2">
                <label htmlFor="slug" className="d-inline-block mb-2">
                Slug
                </label>
                <input
                  type="text"
                  id="slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="form-control"
                />
              </div>
            <div className="mb-2">
              <label htmlFor="description" className="d-inline-block mb-2">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
              ></textarea>
            </div>
            <div className="mb-3">
            <label htmlFor="image" className="d-inline-block mb-1">
              Image
            </label>
            <input type="file" id="image" className="form-control"
            />
            
          </div>
            <div className="mb-3">
              <label htmlFor="parent_id" className="d-inline-block mb-2">
                Cấp cha
              </label>
              <select
                id="parent_id"
                value={parent_id}
                onChange={(e) => setParentId(e.target.value)} 
                className="form-select"
              >
                <option value="0">None</option>
                {categorys &&
                      categorys.map((category) => {
                        if (category.parent_id === 0) {
                          return (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          );
                        }
                      })}
              </select>
            </div>
         
            <div className="mb-3">
              <label htmlFor="status" className="d-inline-block mb-2">
                Trạng thái
              </label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="form-select"
              >
                <option value="1">Xuất bản</option>
                <option value="2">Chưa xuất bản</option>
              </select>
            </div>
            <div className="mb-2 text-end">
                <button 
                  type="submit"
                  className="btn btn-success text-white "
                  style={{ width: "200px" }}
                  name="CAPNHAT"
                >
                  Cập nhật
                </button>
              </div>
          </form>
          </div>
          </div>
    </div>
    </div>
  )
}

export default CategoryEdit
