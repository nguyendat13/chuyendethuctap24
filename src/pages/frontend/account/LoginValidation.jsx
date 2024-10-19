// LoginValidation.js
const LoginValidation = ({ email, password }) => {
  const errors = {};

  // Email validation (must not be empty and should match a proper email pattern)
  if (!email) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Invalid email format.";
  }

  // Password validation (must not be empty and should have a minimum length)
  if (!password) {
    errors.password = "Password is required.";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  return errors;
};

export default LoginValidation;
