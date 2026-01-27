import { Link,useNavigate } from "react-router-dom";
import { users } from "./userDataStore";
import { useState } from "react";
import { toast } from "react-toastify";

const Login=({setIsLoggedIn})=>{
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailId: '',
    password: ''
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
    const { emailId, password } = formData;

    // Find a user in the global array that matches the credentials
    const foundUser = users.find(user => 
      user.userEmailId === emailId && user.userPassword === password
    );

    if (foundUser) {
      setIsLoggedIn(true);
      toast.success(`Logged in successfully! Welcome, ${foundUser.userName}`);
      navigate('/brands');
    } else {
      toast.error('Please enter a valid email or password!');
    }
  };
    return(
        <>
            <div style={{width:'50%',margin:'auto',borderRadius:'5px',marginTop: '2rem',padding: '2rem'}}>    <h1 className="bold text-center" style={{color:'navy'}}>Log In</h1>
    <div style={{margin:'auto',width:'50%'}}>
  <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" id="emailId" value={formData.emailId} onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange}/>
  </div>
  <br/>
  <div style={{margin:'auto', width:'100%'}}>
  <button type="submit" className="btn" style={{backgroundColor:'rgb(255, 186, 12)', color:'white', margin:'auto 120px',padding:'0.5rem 2rem'}}>Login</button>
  </div>
  <br/>
  <p style={{textAlign:'center'}}>New User:<Link to='/register' style={{color:'#3b7c7e', textDecoration:'none'}}><b> Register Here</b></Link></p>
</form>
        </div>
        </div>
        </>
    )
}

export default Login;