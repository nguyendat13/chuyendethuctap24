import React from 'react'
import LogoLogin from "../../../assets/images/logo_login.webp";

const Login = () => {
  return (
    <section className="container py-5">
      <div className="container-fluid h-custom py-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={LogoLogin} className="img-fluid" alt="Sample image" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form action="{{ route('website.dologin') }}" method="post">
              @csrf
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3 text-danger">
                  Sign in with
                </p>
                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-twitter"></i>
                </button>

                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </div>
              <div data-mdb-input-init className="form-outline mb-4 mt-4">
                <label className="form-label" for="username">
                  Email
                </label>
                <input
                  type="username"
                  id="username"
                  className="form-control"
                  name="username"
                  placeholder="Enter a valid email address"
                />
              </div>
              <div data-mdb-input-init className="form-outline mb-3">
                <label className="form-label" for="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2 d-flex justify-content-center">
                <button
                  type="submit"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-lg"
                  // style="padding-left: 2.5rem; padding-right: 2.5rem;"
                >
                  Login
                </button>
              </div>
              <p className="small fw-bold mt-2 pt-1 mb-0 text-center">
                Don't have an account?
                <a
                  href="{{ asset('/tai-khoan/dang-ky') }}"
                  className="link-danger"
                >
                  Register
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
