import "./scss/index.scss";

import * as React from "react";

const ContactUs: React.FC = () => (
   <div className="homePage">
      <div className="Contactbg">
      <div className="container">
         <div className="ContactContent">
               <div className="ContactText">
                  <h3>Get In Touch</h3>
                  <p>We would love to hear from you</p>
               </div>
               
               <div className="ContactFrom">
                  <div className="FormContent">
                     <div className="formTypography">
                     <p className="FormQuestion">Questions about our service?</p>
                        <h3 className="FormTitle">Customer Service <span className="small-text">Enquiries</span></h3>
                        
                        <p className="HelpText">We're here to help! The fastest way to get an answer is to mail us at</p>
                        <a className="FormLink" href="mailto:support@sitarri.co.uk">support@sitarri.co.uk</a>
                     </div>

                     <div className="formTypography">
                     <p className="FormQuestion">Need help</p>
                        <h3 className="FormTitle">Partner Enquiries</h3>
                        
                        <p className="HelpText">From answer to questions or general assistance please email us at</p>
                        <a className="FormLink" href="mailto:partner@sitarri.co.uk">partner@sitarri.co.uk</a>
                     </div>

                     <div className="formTypography lastBox">
                     <p className="FormQuestion">From the press?</p>
                        <h3 className="FormTitle">Press Enquiries</h3>
                       
                        <p className="HelpText">We're here to help! The fastest way to get an answer is to mail us at</p>
                        <a className="FormLink" href="mailto:press@sitarri.co.uk">press@sitarri.co.uk</a>
                        <p className="HelpText mt-20">Unfortunately the press office doesn't have access to account information, so can't help with customer or partner enquiries.</p>
                     </div>

                  </div>
               </div>

         </div>

      </div>
      </div>
   </div>
);

export default ContactUs;
