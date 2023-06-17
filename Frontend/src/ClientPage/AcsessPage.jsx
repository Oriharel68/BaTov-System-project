import React from 'react'
import ClientNavBar from '../nav/ClientNavBar'

function AcsessPage() {
  return (
    <div>
        
        <div className="page-wraper">
        {/* bdika vdika */}
        {/* <ClientNavBar/> */}
       
        <div className="mainClient-page-wraper">
        <ClientNavBar/>
        
          <div className="mainClient-page">
                THE FORM DIV HERE 
                <br />
                ACCESS // PHONE MESSAGE WAY || PASSWORD WAY
                
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
        </div>

       </div>
    </div>
  )
}

export default AcsessPage