import React, { useState } from 'react'
import ClientNavBar from '../nav/ClientNavBar'
import { getAuth ,signInWithEmailAndPassword } from 'firebase/auth';


const auth = getAuth();



function AcsessPage() {
  const [Loggedin, setLoggedin] = useState(false);


  function handleOnSubmit(event) {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setLoggedin(true);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`${errorCode}:${errorMessage}`);
    const p = document.querySelector('p');
    p.innerText = `${errorCode}:${errorMessage}`;

  });
    
  }


  return (
    <div>
        
        <div className="page-wraper">
        {/* bdika vdika */}
        {/* <ClientNavBar/> */}
       
        <div className="mainClient-page-wraper">
        <ClientNavBar/>
        { Loggedin ? <h1>welcome {auth.currentUser.displayName}</h1>: <p>Log in</p> }
          <div className="mainClient-page">
          <form action="" onSubmit={(event) => handleOnSubmit(event)}>
              <input type="email" name="" id="email" placeholder="Email" />
              <input type="password" placeholder="Password" id="password" />
              <div className="buttonContainer-client">
                <button>Login</button>
              </div>
            </form> 
                
              
                
          {/* <div className="buttonContainer-client">
          <form 
          onSubmit={handleSubmit(onSubmit)}>
        <input
          name="message"
          autoComplete="off"

          // check how register is being used.
          {...register("message", {
            required: "Required",
          })}
        />
        {errors.message && errors.message.message}
        <input type="submit" />
      </form>
              
       
          </div> */}
        </div>
        <p></p>

        </div>

       </div>
    </div>
  )
}

export default AcsessPage