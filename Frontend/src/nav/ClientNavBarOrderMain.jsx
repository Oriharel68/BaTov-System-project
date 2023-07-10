import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { CgProfile } from 'react-icons/cg';

import { getAuth, signOut } from "firebase/auth";
function ClientNavBarOrderMain() {
  const navigate = useNavigate(); 

  function handleOnSubmit(event) {
    event.preventDefault();
    // const formData = new FormData(event.target)

    // // const email = formData.get('Email')
    // // const password = formData.get('password');
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      alert("Sign-out successful.")
      // setLoggedin(true);
      setTimeout(() => {
        navigate('/client/main')
      }, 1000);
    
      // ...
    }).catch((error) => {
      // An error happened.
      // let errorCode = error.code;
      //       const errorMessage = error.message;
      //                                          console.log(errorMessage);                  
      //       // console.log(`${errorCode}:${errorMessage}`);
      //       const errorbox = document.querySelector("#errorbox");
      //       console.log(errorCode);
      //       let Message = "" + errorCode.replace('auth/','');
      //       Message = Message.replace(':', 'd');
      //       errorbox.innerText = `${Message}:`;
    });
  }

  return (
    <div>
      <div className="navBar-Client">
        <Link to={"/order/main"}>
          <h1>logo</h1>
        </Link>
        <form action="" onSubmit={(event)=>handleOnSubmit(event)}>
        {/* <Link to={"/client/main"}> */}
      
          <a href="" id="LU">
            {/* <CgProfile id="LOGOUT"/> */}
            <button>
             Log Out  
            </button>
             </a>
             
        {/* </Link> */}
        </form>
      </div>
    </div>
  );
}

export default ClientNavBarOrderMain;
