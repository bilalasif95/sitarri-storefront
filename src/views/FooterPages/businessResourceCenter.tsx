import "./scss/index.scss";

import * as React from "react";
import { Link } from "react-router-dom";
// import ReactSVG from "react-svg";

import * as appPaths from "../../app/routes";

// import { ADMIN_PANEL_LINK } from "../../core/config";

import Check from "../../images/Check.svg";
import ManImg from "../../images/food.svg";
import Free from "../../images/Free.svg";
import Discover from "../../images/Get_Discovered.svg";
import Speaker from "../../images/Megaphone.svg";
import Phone from "../../images/phone.svg";
import Card from "../../images/Sales_Growth.svg";
import Setup from "../../images/Setup.svg";
import Signup from "../../images/Sign_Up.svg";
// import Next from "../../images/next.svg";

const ContactUs: React.FC = () => (
   <div className="homePage">
      <div className="LineOne"></div>
      <div className="Businessbg">
         <div className="container">
            <div className="addBusiness">
               <div className="BusinessContent">
                  <div className="BusinessText">
                     <h3>Get Discovered by your ideal customers</h3>
                     <p>Thousands of businesses of all sizes-from local stores to large enterprises-use Sitarri platform to get discovered by new customers and keep them coming back.</p>

                     {/* <div className="BusinessForm"> */}
                     {/* <div className="BusinessBtns"> */}
                     {/* <a className="SignupBtn" target="_blank" href={ADMIN_PANEL_LINK}>Sign Up

                        <svg xmlns="https://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 289.048 492.004">
                                 <g id="next_1_" data-name="next (1)" transform="translate(-101.478)">
                                    <g id="Group_8" data-name="Group 8">
                                       <path id="Path_374" data-name="Path 374" d="M382.678,226.8,163.73,7.86a26.972,26.972,0,0,0-38.064,0L109.542,23.98a26.95,26.95,0,0,0,0,38.064L293.4,245.9,109.338,429.96a26.977,26.977,0,0,0,0,38.068l16.124,16.116a26.972,26.972,0,0,0,38.064,0L382.678,265a27.161,27.161,0,0,0,0-38.2Z" fill="#fff" />
                                    </g>
                                 </g>
                              </svg>

                           </a> */}
                     {/* <a className="SigninBtn" target="_blank" href={ADMIN_PANEL_LINK}>Sign In

                        <svg xmlns="https://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 289.048 492.004">
                                 <g id="next_1_" data-name="next (1)" transform="translate(-101.478)">
                                    <g id="Group_8" data-name="Group 8">
                                       <path id="Path_374" data-name="Path 374" d="M382.678,226.8,163.73,7.86a26.972,26.972,0,0,0-38.064,0L109.542,23.98a26.95,26.95,0,0,0,0,38.064L293.4,245.9,109.338,429.96a26.977,26.977,0,0,0,0,38.068l16.124,16.116a26.972,26.972,0,0,0,38.064,0L382.678,265a27.161,27.161,0,0,0,0-38.2Z" fill="#092540" />
                                    </g>
                                 </g>
                              </svg>

                           </a> */}
                     {/* </div> */}
                     {/* </div> */}

                  </div>



               </div>

               <div className="SideBox">
                  <div className="SideBoxContent">
                     <img className="mobile" src={Phone} />
                     <img className="food" src={ManImg} />
                  </div>
               </div>
            </div>





         </div>
      </div>




      {/* join-sitarri */}
      <div className="joinSitarri">
         <div className="container">
            <div className="JoinBoxTypography">
               <p className="FormQuestion">Unified Marketing Platform</p>
               <h3 className="JoinTitle">Why join Sitarri?</h3>
            </div>
            <div className="JoinContent">
               <div className="joinBoxes V-line">
                  <h4 className="boxHeading">Increase Sales</h4>
                  <img src={Card} />
                  <p className="joinText">Keep Your Business busy</p>
                  <p className="joinBoxestext">Join a well-oiled marketing machine and watch the order come in through your door and online.</p>
               </div>

               <div className="joinBoxes BoxV-line">
                  <h4 className="boxHeading">Reach More Customers</h4>
                  <img src={Speaker} />
                  <p className="joinText">Meet them and keep them</p>
                  <p className="joinBoxestext">Attract new local customers and keep them coming back for more.</p>
               </div>


               <div className="joinBoxes FoodV-line">
                  <h4 className="boxHeading">Pay Nothing</h4>
                  <img src={Free} />
                  <p className="joinText">Free forever</p>
                  <p className="joinBoxestext">Make the most of Sitarri as your free marketing tool.</p>
               </div>
            </div>


         </div>
      </div>


      {/* join-sitarri */}

      {/* Become-partner */}
      <div className="partner">
         <div className="container">
            <div className="partnerContent">
               <div className="BecomeTypography">
                  <p className="FormQuestion">Unified Marketing Platform</p>
                  <h3 className="partnerTitle">Become a Sitarri Partner Today</h3>

               </div>
               <p className="partnerheading">Connect your POS or Upload your products and be live on Sitarri in just 1 day.</p>
               <ul className="partnerList">
                  <li><img src={Check} />Stand out on to customers with a free Sitarri profile.</li>
                  <li><img src={Check} />Keep customers up-to-date, with accurate products, opening times, prices and photos.</li>
                  <li><img src={Check} />Al you business information in one place.Link your Sitarri profile to your,social media accounts,website,delivery partner pages and Google account.</li>
                  <li><img src={Check} />Anyone can use Sitarri free of charge Really, we mean it.</li>
               </ul>
            </div>
         </div>
      </div>
      {/* Become-partner */}

      {/* join-sitarri */}
      <div className="joinSitarri">
         <div className="container">
            <div className="JoinBoxTypography">
               <div className="BgLine1"></div>
               <div className="BgLine2"></div>
               <p className="FormQuestion">Designed For Businesses</p>
               <h3 className="JoinTitle">How does Sitarri work?</h3>
               <p className="ProfileText">Set up your Sitarri Profile in Three easy steps.</p>
            </div>
            <div className="WorkContent">
               <div className="joinBoxes workV-line">
                  <h4 className="boxHeading">Sign Up</h4>
                  <img src={Signup} />
                  <p className="joinBoxestext">Partner with Sitarri and tell us about your business</p>
               </div>

               <div className="joinBoxes workBoxV-line">
                  <h4 className="boxHeading">Set Up</h4>
                  <img src={Setup} />
                  <p className="joinBoxestext">Connect your POS system or upload your products.</p>
               </div>


               <div className="joinBoxes workFoodV-line">
                  <h4 className="boxHeading">Get Discovered</h4>
                  <img style={{ marginBottom: "5px" }} src={Discover} />
                  <p className="joinBoxestext">Go live and get discovered by customers.</p>
               </div>
            </div>




            {/* Contact-US */}
            <div className="Contactus">
               <div className="ContactusText">
                  <h3 className="ContactusTitle">Become a Sitarri Partner Today</h3>
               </div>
               <div className="Contactusbtn">
                  <Link className="Contactbtn" to={appPaths.contactUsUrl}>Contact Us
         <svg xmlns="https://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 289.048 492.004">
                        <g id="next_1_" data-name="next (1)" transform="translate(-101.478)">
                           <g id="Group_8" data-name="Group 8">
                              <path id="Path_374" data-name="Path 374" d="M382.678,226.8,163.73,7.86a26.972,26.972,0,0,0-38.064,0L109.542,23.98a26.95,26.95,0,0,0,0,38.064L293.4,245.9,109.338,429.96a26.977,26.977,0,0,0,0,38.068l16.124,16.116a26.972,26.972,0,0,0,38.064,0L382.678,265a27.161,27.161,0,0,0,0-38.2Z" fill="#fff" />
                           </g>
                        </g>
                     </svg>

                  </Link>
               </div>

               {/* <div className="BusinessForm">
                  <div className="BusinessBtns">
                     <a className="SignupBtn" target="_blank" href={ADMIN_PANEL_LINK}>Sign Up

                        <svg xmlns="https://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 289.048 492.004">
                           <g id="next_1_" data-name="next (1)" transform="translate(-101.478)">
                              <g id="Group_8" data-name="Group 8">
                                 <path id="Path_374" data-name="Path 374" d="M382.678,226.8,163.73,7.86a26.972,26.972,0,0,0-38.064,0L109.542,23.98a26.95,26.95,0,0,0,0,38.064L293.4,245.9,109.338,429.96a26.977,26.977,0,0,0,0,38.068l16.124,16.116a26.972,26.972,0,0,0,38.064,0L382.678,265a27.161,27.161,0,0,0,0-38.2Z" fill="#fff" />
                              </g>
                           </g>
                        </svg>

                     </a>
                     <a className="SigninBtn" target="_blank" href={ADMIN_PANEL_LINK}>Sign In

                        <svg xmlns="https://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 289.048 492.004">
                           <g id="next_1_" data-name="next (1)" transform="translate(-101.478)">
                              <g id="Group_8" data-name="Group 8">
                                 <path id="Path_374" data-name="Path 374" d="M382.678,226.8,163.73,7.86a26.972,26.972,0,0,0-38.064,0L109.542,23.98a26.95,26.95,0,0,0,0,38.064L293.4,245.9,109.338,429.96a26.977,26.977,0,0,0,0,38.068l16.124,16.116a26.972,26.972,0,0,0,38.064,0L382.678,265a27.161,27.161,0,0,0,0-38.2Z" fill="#092540" />
                              </g>
                           </g>
                        </svg>

                     </a>
                  </div>
               </div> */}

            </div>
            {/* Contact-US */}
         </div>

      </div>


      {/* join-sitarri */}




      <div className="MblVerticalLine1"></div>
      <div className="MblVerticalLine2"></div>
      <div className="MblHorizontalLine"></div>
   </div>
);

export default ContactUs;
