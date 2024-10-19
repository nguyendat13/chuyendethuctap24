function Validation(user) {
    let errors = {};
  
    const emailPattern = /^[^\s@]+@[^\s]+\.[^\s]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (user.name === "") {
        errors.name = "Email should not be empty";
      } else{
            errors.name=""
      }
    
    if (user.email === "") {
      errors.email = "Email should not be empty";
    } else if (!emailPattern.test(user.email)) {
      errors.email = "Invalid email format";
    }
  
    if (user.password === "") {
      errors.password = "Password should not be empty";
    } else if (!passwordPattern.test(user.password)) {
      errors.password = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
    }
  
    return errors;
  }

  export default Validation