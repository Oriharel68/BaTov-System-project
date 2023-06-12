import React, { useEffect, useState } from 'react'
import Footer from './Footer'



function Main() {

  // const [isSticky, setIsSticky] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const stopStickyElement = document.getElementById('stop-sticky');
  //     const distanceFromTop = stopStickyElement.getBoundingClientRect().top;

  //     setIsSticky(distanceFromTop > 0);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);


  return (
    <div>
      <div className="page-wrap">
      <div className="topFirst-container">    
   <div className="insidetopFirst-container">

   <h3>name of the company </h3>
   <h4>slogen / some text about the company</h4>
   <div className="btn-container">
     <button >חברה</button>
     <button style={{marginLeft:'35px'}}>לקוח</button>
   </div>
   </div>
 </div>
      </div>
     
        
      
      <div className="content-container">

      <div className="welcome-container">
        <h3>about us :</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quo nisi ducimus et, facilis quia ex error itaque tempora, distinctio beatae cupiditate, veniam atque. Doloremque possimus perferendis officiis corrupti ad.
        Magnam eaque dolore eveniet exercitationem nostrum facilis vero optio doloremque esse recusandae eos, deserunt sit error, ipsum libero at temporibus tenetur laboriosam sequi consequatur voluptatum, molestias veniam. Deserunt, provident blanditiis?
        Sit fugiat nostrum quam, beatae odit voluptas nobis libero debitis praesentium illo asperiores animi, eveniet quibusdam autem rem ipsum quia impedit eius incidunt voluptatem vitae suscipit necessitatibus. Omnis, eligendi aut?
        At nemo sequi ducimus. Debitis maiores illo dolorum voluptatem aspernatur quasi repellendus tempore natus quos modi atque rem aperiam officiis est, accusamus quia sunt! Ullam exercitationem similique odit totam veritatis!
        </p>
      </div>


      <div className="introduction-containerFirst">
        <div className="left-container">
          <div className="describe-containerFirst">

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nesciunt voluptatum tenetur minus quia quo eius, rerum et inventore expedita necessitatibus, delectus nam, provident vel ducimus ipsam libero blanditiis consequuntur.
          Est illum iusto minima minus doloremque deleniti, distinctio temporibus possimus libero quas aliquid accusantium consectetur, fugiat repudiandae optio quae pariatur ad dolorem. Quae laboriosam, dolore soluta quos expedita necessitatibus mollitia.
          </p>
          </div>
          
            
        </div>
        <div className="right-container">
          <div className="image-containerFirst">
            <img src="data:image/png;base64,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" alt="" />
          </div>
         
        </div>
      </div>
      
      <div className="introduction-containerSeconed">
        
      
    
      <div className="left-container">

        <div className="image-containerSeconed">
            <img src="data:image/png;base64,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" alt="" />
          </div>

          </div>

          <div className="right-container">
     <div className="describe-containerSeconed">
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nesciunt voluptatum tenetur minus quia quo eius, rerum et inventore expedita necessitatibus, delectus nam, provident vel ducimus ipsam libero blanditiis consequuntur.
          Est illum iusto minima minus doloremque deleniti, distinctio temporibus possimus libero quas aliquid accusantium consectetur, fugiat repudiandae optio quae pariatur ad dolorem. Quae laboriosam, dolore soluta quos expedita necessitatibus mollitia.
          </p>
     </div>
     </div>

      </div>
     

      </div>
       <div className="footer-container">
        <Footer/>
       </div>
    </div>
  )
}

export default Main