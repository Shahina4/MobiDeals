import { Link,useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { users } from "./userDataStore";
import { useState } from "react";
const Register=()=>{
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    emailId: '',
    mobileNumber: '',
    password: '',
    confirmPassword: ''
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };
  const handleSubmit = (e) => {
      e.preventDefault();
    const { name, emailId, mobileNumber, password, confirmPassword } = formData;
    
    const isEmailRegistered = users.some(user => user.userEmailId === emailId);
    if(isEmailRegistered) {
      toast.error('This email is already registered. Please login.');
      return;
    }
    if(Object.values(formData).some(val => val === '')) {
      toast.error('All fields are mandatory!');
      return;
    } 
    else if(mobileNumber.length !== 10 || isNaN(mobileNumber)) {
      toast.error('Please enter a valid 10-digit number!');
      return;
    } 
    else if(password !== confirmPassword) {
      toast.error('Passwords do not match. Please enter the same password to confirm!');
      return;
    } 
    else{
      const newUser = {
        userName: name,
        userEmailId: emailId,
        userMobileNumber: mobileNumber,
        userPassword: password
      };
      users.push(newUser);
      console.log('Registered Users:', users);
      toast.success('Registration completed successfully! Login to continue...');
      navigate('/login');      
    }
  }
  return(
    <>
      <div style={{width:'50%',margin:'auto',borderRadius:'5px',padding: '2rem'}}>    
        <h1 className="bold text-center" style={{color:'navy'}}>Register</h1>
        <div style={{margin:'auto',width:'50%'}}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" 
                      value={formData.name} onChange={handleChange}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Email ID</label>
              <input type="email" className="form-control" id="emailId" 
                      value={formData.emailId} onChange={handleChange}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <input type="text" className="form-control" id="mobileNumber"
                      value={formData.mobileNumber} onChange={handleChange}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" id="password" 
                      value={formData.password} onChange={handleChange}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="confirmPassword" 
                      value={formData.confirmPassword} onChange={handleChange}/>
            </div>
            <br/>
            <div style={{textAlign:'center'}}>
              <button type="submit" className="btn" 
                      style={{backgroundColor:'#3b7c7e', color:'white', width:'40%',textAlign:'center'}}>
                        Register
              </button>
            </div>
            <br/>
            <p style={{textAlign:'center'}}>
              Existing User?: 
              <Link to='/login' style={{color:'rgb(255, 186, 12)', textDecoration:'none'}}>
                <b>Login Here</b>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register;