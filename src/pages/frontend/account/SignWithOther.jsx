import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const SignWithOther = () => {
  return (
       <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
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
              <FontAwesomeIcon icon={faFacebook} />
              </button>
                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-floating mx-1"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                  </button>

                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-floating mx-1"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  </button>
              </div>
                </div>
  )
}

export default SignWithOther
