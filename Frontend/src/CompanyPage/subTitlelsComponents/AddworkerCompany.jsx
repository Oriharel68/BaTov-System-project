import React, { useEffect, useState } from 'react'
import CombaibnedNavCompany from '../../nav/CombaibnedNavCompany'
import axios from 'axios';
import AddWorkerListCompany from './Add Worker List/AddWorkerListCompany';
// import ServerStatus from "../FireBase/ServerStatus";
function AddworkerCompany() {
  const [ServiceProviders,setServiceProviders] = useState([]);

  async function handleOnSubmit(event) {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);
      const WorkerName = formData.get("workerName");
      const TypeOfService = formData.get("serviceType");
      const Price = formData.get("price");
      
      if (!Price || !TypeOfService || !TypeOfService ) {
        alert("missing info");
        return;
      }
      // if(rPassword !== password){
      // alert('password not the same');
      // return;
      // } 
      // if (!(await ServerStatus())) {
      //   alert("Server down");
      //   return;
      // }
      
      const  {data}  = await axios.put("http://localhost:4000/addProvider", {
       Price,
       WorkerName,
       TypeOfService,
      })
       

     
      if (!data.ok) {
        alert(data.error);
        // userCred.user.delete();
        return;
      }
      else if(data.ok){
        alert('Provider has been created succssefuly');
      }      
      

        // updateProfile(userCred.user, {
        //   displayName: `${FirstName} ${LastName}`,
        // })


          // .then(() => {
          //   // alert("user was created Succsesfuly");
          //   navigate("/client/registrationCompalete")
          //   setTimeout(() => {
          //     navigate("/client/access");
          //   }, 3000);

          // })


         
          
        

      // createUserWithEmailAndPassword(auth, Email, password)
      //   .then(async (userCred) => {
      //     //what happen after a user register
      //     const { data } = await axios.post("http://localhost:4000/register", {
      //       FirstName,
      //       LastName,
      //       Email,
      //       PhoneNumber,
      //     });

      //     if (!data.ok) {
      //       alert(data.error);
      //       userCred.user.delete();
      //       return;
      //     }

      //     updateProfile(userCred.user, {
      //       displayName: `${FirstName} ${LastName}`,
      //     })


      //       .then(() => {
      //         // alert("user was created Succsesfuly");
      //         navigate("/client/registrationCompalete")
      //         setTimeout(() => {
      //           navigate("/client/access");
      //         }, 3000);

      //       })


      //       .catch((err) => {
      //         alert(err);
      //       });
      //   })
      //   .catch((err) => {
      //     alert(err);
      //   });
    } catch (error) {
      alert(error);
    }
  }
useEffect(() => {
    async function getServiceProviders(){
      try{
      const {data} = await axios.get("http://localhost:4000/getServiceProvider");
      setServiceProviders(data);
      }catch(err){
        console.log(err);
      }
    }
    getServiceProviders();
  }, [])

  return (
    <div>
      <div className="navCompany-container">

      <CombaibnedNavCompany/>
      </div>
      
      <div className="mainAddWorker-Page">
        <div className="main-container">
          <form action=""  onSubmit={(event) => handleOnSubmit(event)}>
          <h3>הוספת עובד</h3>
            
        <input type="text" id="W2" name="workerName" placeholder='שם עובד'/>
        <input type="text" id="W2" name="serviceType" placeholder='סוג איש מקצוע'/>
        <input type="number" id="W3" name="price" placeholder='מחיר/עלות בדיקה' min="0"/>
         
          <button>
            הוספה
          </button>
          </form>

            
            </div>
            <div className="Worker-list-container">
              <h3>ניהול עובדים קיימים</h3>

              <div className="main-worker-list-container">
              {ServiceProviders.map((item)=>{
                  
                return (
                  
                  <table>

                     
                     <AddWorkerListCompany item={item} key={item._id}/>
                     
                    
                     </table>

                  )
                })}
         
           
              </div>
         
              </div>
      </div>

    </div>
  )
}
// input[type=text]:focus {
  // background-color: lightblue;
// }
export default AddworkerCompany