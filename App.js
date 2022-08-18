import logo from './logo.svg';
import './App.css';

import React, {useState }from 'react';
import LoginForm from './components/LoginForm';


function App(){
 const adminUser = {
     email:"user@user.com",
  password:"user123"
    // password:"user123"
   }

  const [user,setUser] = useState({name:"", email:""});
  const[error,setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
    console.log("Logged in");
    setUser({
      name:details.name,
      email:details.email
    });
  }else {
    console.log("Details do not match!");
    setError("Details do not match!");
  }
  }

  const submit =() =>
  {
    setUser({ name:"",email:""});
   // console.log("Logout");
  }


  return (
    <div className="App">
    {( user.email !="") ? (
  <div className="welcome">
  <h2>Welcome , <span>{user.name}</span></h2>
  <h3 color='red'>How are you feeling today ?</h3>


<label>
<div>
  <input type="radio" value="Happy" name="mood"/>🙂Happy
  <input type="radio" value="sad" name="mood"/>😢sad
  <input type="radio" value="&#128516" name="mood"/>😐Neutral
  </div>
  </label>
<div>


</div>


  <button onClick={submit}>Submit</button>
   </div>
  ):(
    <LoginForm Login = {Login} error={error} />
  )}

</div>
  )
}

export default App;
