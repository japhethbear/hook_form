import React, {useState} from 'react'

    const Form = (props) => {
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");  
      const [confirmPassword, setConfirmPassword] = useState("");
      
      const createUser = (e) => {
          // we must prevent the default refresh of the browser to keep our state from being reset
          e.preventDefault();
          
          // shorthand ES6 syntax for building an object - see notes above
          const newUser = { firstName, lastName, email, password, confirmPassword };
          console.log("Welcome", newUser);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");

    };
    
    return(
        <form action="" className='form col-md-4 mx-auto' onSubmit={ createUser }>
            <div className='form-group'>
              <div className='form-group'>
                  <label className='label'>First Name: </label> 
                  <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
              </div>
              <div className='form-group'>
                  <label className='label'>Last Name: </label> 
                  <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
              </div>
              <div className='form-group'>
                  <label className='label'>Email Address: </label> 
                  <input type="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
              </div>
              <div className='form-group'>
                  <label className='label'>Password:</label>
                  <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
              </div>
              <div className='form-group'>
                  <label className='label'>Confirm Password: </label>
                  <input type="text" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
              </div>
              <input type="submit" value="Create User" />
              <div>
                <h1>Your Form Data</h1>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email Address: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
              </div>
            </div>
        </form>
    );
};  

export default Form