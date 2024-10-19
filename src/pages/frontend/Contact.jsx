import React from "react";
import { Link } from "react-router-dom";
import {useEffect, useState } from "react";
import ContactService from "../../services/ContactService";
import ContactImg from "../../assets/images/contact.png"
const ContactCreate = () => {
    const [contacts, setcontacts] = useState("");
  const [isLoad,setIsload]=useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState(2);
//load du lieu len grid
const handleSubmit = (e) => {
  e.preventDefault();

  const image = document.querySelector("#image");
  let contact= new FormData();
  contact.append("name",name);
  contact.append("email",email);
  contact.append("phone",phone);
  contact.append("title",title);
  contact.append("content",content);
  contact.append("image", image.files.length === 0 ? "" : image.files[0]);
  contact.append("status",status);
  (async () => {
    const result = await ContactService.store(contact);
    if (result.status === true) {
      setIsload(result.contact.isLoad);
      window.location.href = "/home/contact";
    }
  })();
  };
 
  return (
    <div>
      <div class="hero">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-5">
              <div class="intro-excerpt">
                <h1>Contact To Us</h1>
                <div>
                  <p class="mb-4">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate velit imperdiet dolor
                    tempor tristique.
                  </p>
                  <p>
                    <a href="/shop" class="btn btn-secondary me-2">
                      Buy Now To Review
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="hero-img-wrap"></div>
              <img src={ContactImg} className="img-fluid" />
              <div class="hero-img-wrap"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="untree_co-section">
        <div class="container">
          <div class="block">
            <div class="row justify-content-center">
              <div class="col-md-8 col-lg-8 pb-4 m-4">
                <div class="row mb-4">
                  <div class="col-lg-4">
                    <div
                      class="service no-shadow align-items-center link horizontal d-flex active"
                      data-aos="fade-left"
                      data-aos-delay="0"
                    >
                      <div class="service-icon color-1 mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-geo-alt-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                      </div>
                      <div class="service-contents">
                        <p>16 Tang Nhon Phu ,Phuoc Long B,Thu Duc -Tp.HCM</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div
                      class="service no-shadow align-items-center link horizontal d-flex active"
                      data-aos="fade-left"
                      data-aos-delay="0"
                    >
                      <div class="service-icon color-1 mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-envelope-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                        </svg>
                      </div>
                      <div class="service-contents">
                        <p>PhatDat@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div
                      class="service no-shadow align-items-center link horizontal d-flex active"
                      data-aos="fade-left"
                      data-aos-delay="0"
                    >
                      <div class="service-icon color-1 mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-telephone-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                          />
                        </svg>
                      </div>
                      <div class="service-contents">
                        <p>+84 845 553 994</p>
                      </div>
                    </div>
                  </div>
                </div>
                  <div class="row">
                  <div class="col-md-12">
                  <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.746776096385!2d106.77242407468411!3d10.830680489321376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526ffdc466379%3A0x89b09531e82960d!2zMjAgVMSDbmcgTmjGoW4gUGjDuiwgUGjGsOG7m2MgTG9uZyBCLCBRdeG6rW4gOSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1692683712719!5m2!1svi!2s"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div class="col-12">
                      <div class="form-group">
                        <label class="text-black" for="name">
                          Name
                        </label>
                        <input  value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text" class="form-control" id="name" />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label class="text-black" for="phone">
                          Phone
                        </label>
                        <input  value={phone}
                        onChange={(e) => setPhone(e.target.value)} type="phone" class="form-control" id="phone" />
                      </div>
                    </div>
                 
                    <div class="form-group">
                    <label class="text-black" for="email">
                      Email address
                    </label>
                    <input  value={email}
                   onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" id="email" />
                    </div>
                    <div class="form-group mb-4">
                    <label class="text-black" for="title">
                      Title
                    </label>
                    <textarea
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                      name=""
                      class="form-control"
                      id="title"
                      cols="10"
                      rows="1"
                    ></textarea>
                    </div>
                    <div class="form-group mb-3">
                    <label class="text-black" for="content">
                      Message
                    </label>
                    <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                      name=""
                      class="form-control"
                      id="content"
                      cols="30"
                      rows="5"
                    ></textarea>
                    </div>
                    <div className="mb-4">
               <label htmlFor="image" className="d-inline-block mb-1">
                Image
              </label>
              <input type="file" id="image" className="form-control" />
                    </div>
                  <button type="submit" class="btn btn-primary-hover-outline">
                    Send Message
                  </button>
                  </form>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default ContactCreate
