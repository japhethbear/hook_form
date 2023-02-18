import React, {useState} from 'react'

    const Form = (props) => {
      const [firstName, setFirstName] = useState("");
      const [firstNameError, setFirstNameError] = useState("");
      const [lastName, setLastName] = useState("");
      const [lastNameError, setLastNameError] = useState("");
      const [email, setEmail] = useState("");
      const [emailError, setEmailError] = useState("");
      const [password, setPassword] = useState("");  
      const [passwordError, setPasswordError] = useState("");
      const [confirmPassword, setConfirmPassword] = useState("");
      const [confirmPasswordError, setConfirmPasswordError] = useState("");
      const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

      const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First name is required!");
        } else if(e.target.value.length < 3) {
            setFirstNameError("First name must be at least 3 characters.");
        } else {
            setFirstNameError("");
        }
      }

      const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last name is required!");
        } else if(e.target.value.length < 3) {
            setLastNameError("Last name must be at least 3 characters.");
        } else {
            setLastNameError("");
        }
      }
      
      const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters.");
        } else {
            setEmailError("");
        }
      }

      const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPassword("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters.");
        } else {
            setPasswordError("");
        }
      }

      const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value != password) {
            setConfirmPasswordError("Passwords must match!");
        } else {
            setConfirmPasswordError("");
        }
      }

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
          setHasBeenSubmitted(true);

    };

    // const formMessage = () => {
    //     if( hasBeenSubmitted ) {
    //         return "Thank you for submitting the form!";
    //     }  else {
    //         return "Welcome, please submit the form.";
    //     }
    // };
    
    return(
        <form action="" className='form col-md-4 mx-auto' onSubmit={ createUser }>
            {
                hasBeenSubmitted ?
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form.</h3>
            }
            <div className='form-group'>
              <div className='form-group'>
                  <label className='label'>First Name: </label> 
                  <input type="text" value={firstName} onChange={handleFirstName} />
                  {
                    firstNameError ?
                    <p>{ firstNameError }</p> :
                    ''
                  }
              </div>
              <div className='form-group'>
                  <label className='label'>Last Name: </label> 
                  <input type="text" value={lastName} onChange={handleLastName} />
                  {
                    lastNameError ?
                    <p>{ lastNameError }</p> :
                    ''
                  }
              </div>
              <div className='form-group'>
                  <label className='label'>Email Address: </label> 
                  <input type="email" value={email} onChange={handleEmail} />
                  {
                    emailError ?
                    <p>{ emailError }</p> :
                    ''
                  }
              </div>
              <div className='form-group'>
                  <label className='label'>Password:</label>
                  <input type="text" value={password} onChange={handlePassword} />
                  {
                    passwordError ?
                    <p>{ passwordError }</p> :
                    ''
                  }
              </div>
              <div className='form-group'>
                  <label className='label'>Confirm Password: </label>
                  <input type="text" value={confirmPassword} onChange={handleConfirmPassword} />
                  {
                    confirmPasswordError ?
                    <p>{ confirmPasswordError }</p> :
                    ''
                  }
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