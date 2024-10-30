import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SignWithOther = () => {
  const handleSocialLogin = (platform) => {
    // Thêm logic xử lý đăng nhập cho từng nền tảng
    console.log(`Đăng nhập với ${platform}`);
  };

  return (
    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
        <p className="lead fw-normal mb-0 me-3 text-danger">Sign in with</p>
        <button
          type="button"
          data-mdb-button-init
          data-mdb-ripple-init
          className="btn btn-primary btn-floating mx-1"
          aria-label="Đăng nhập với Facebook"
          onClick={() => handleSocialLogin('Facebook')}
        >
          <FontAwesomeIcon icon={faFacebook} />
        </button>
        <button
          type="button"
          data-mdb-button-init
          data-mdb-ripple-init
          className="btn btn-primary btn-floating mx-1"
          aria-label="Đăng nhập với Twitter"
          onClick={() => handleSocialLogin('Twitter')}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </button>
        <button
          type="button"
          data-mdb-button-init
          data-mdb-ripple-init
          className="btn btn-primary btn-floating mx-1"
          aria-label="Đăng nhập với LinkedIn"
          onClick={() => handleSocialLogin('LinkedIn')}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </button>
      </div>
    </div>
  );
}

export default SignWithOther;
