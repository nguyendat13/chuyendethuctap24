import React from "react";
import { Link, Outlet,useParams } from "react-router-dom";
import { FaTrash, FaRegEdit, FaEye, FaToggleOn } from "react-icons/fa";
import { useState,useEffect } from "react";
import BannerService from "../../../services/BannerService";
const BannerEdit = () => {
    const [banner, setBanner] = useState("");
    const [isLoad,setIsLoad]=useState();
    let{id}=useParams()
    const [name, setName] = useState("")
    const[position,setPosition] =useState()
    const [link, setlink] = useState("")
    const [image,setImage]=useState()
    const [status, setStatus] = useState(0)
    useEffect(() => {
      (async () => {
        const result = await BannerService.show(id);
        if (result.status === true) {
          // If result.banner is an array, convert it to an object
          const bannerObject = Array.isArray(result.banner)
            ? result.banner[0]
            : result.banner;
          setBanner(bannerObject);
          console.log(bannerObject);
          setName(bannerObject.name);
          setPosition(bannerObject.position);
          // setImage(bannerObject.image);
          setlink(bannerObject.link);
          setStatus(bannerObject.status);
        }
      })();
    }, []);
   
    const handleUpdate = (event) => {
      event.preventDefault();
      // alert("Đã thêm sản phẩm");
      const image = document.querySelector("#image");
      const banner = new FormData();
      banner.append("name", name);
      banner.append("position",position)
      banner.append("link", link);
      // banner.append("image", image.files.length === 0 ? "" : image.files[0])
      banner.append("status", status);
  
      (async () => {
        const result = await BannerService.edit(id,banner);
        if (result.status === true) {
          setIsLoad(result.banner.isLoad);
          console.log(result.banner);
          window.location.href = "/admin/banner";
        }
      })();
    }
  return (
    <div className="card">
    <div className="card-header">
        <div className="row">
        <div className="col-md-6">
            <strong>Quản lí BANNER</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/admin/banner" className="btn btn-sm btn-danger">
             Về danh sách
            </Link>
          </div>
        </div>
      </div>
    <div  className="card-body">
      <div className='row'>
      <div className='col-md-12'>
      <form onSubmit={handleUpdate}>
        <section className="content-body my-2">
          <input name="id" value="<?= $banner->id; ?>" type="hidden" />
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label>
                  <strong>Tên banner (*)</strong>
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Nhập tên banner"
                />
              </div>
              <div className="box-container mr-3 mb-2 bg-white">
                <div className="box-body">
                  <strong>Vị trí</strong>
                  <select
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="form-select"
                  >
                    <option value="">{banner.position}</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label>
                  <strong>Liên kết</strong>
                </label>
                <input
                  type="text"
                  name="link"
                  className="form-control"
                  value={link}
                  onChange={(event) => setlink(event.target.value)}
                  placeholder="Nhập liên kết"
                />
              </div>
            </div>
            <div className="col-md-3">
              {/* <div className="box-container mt-4 bg-white">
                <div className="box-header py-1 px-2 border-bottom">
                  <strong>Hình (*)</strong>
                </div>
                <div className="box-body p-2">
                {banner.image}
                  <input type="file" id="image" className="form-control"/>
                </div>
              </div> */}
              <div className="box-container mt-4 bg-white">
                <div className="box-body py-1 px-2">
                  <strong>Chọn trạng thái đăng</strong>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="form-select"
                  >
                    <option value="1">Xuất bản</option>
                    <option value="2">Chưa xuất bản</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className=" m-3 text-end">
                <button 
                  type="submit"
                  className="btn btn-success text-white "
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

export default BannerEdit
