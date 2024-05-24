import React from "react";
import { CgProfile } from "react-icons/cg";
import { BsSuitcaseLgFill } from "react-icons/bs";

import './First.css'

function First() {
    return (

        <div className="first">


            <div className="one">
                <CgProfile />
                <h5>Profile</h5>
            </div>

            <div className="two-one">
                <h1>JASICA GREENE</h1>
                <h4>FREELANCE WRITER</h4>
            </div>
            <div className="three">
                <p>i specialise in writing long-form blog content,case studoes, e-books, </p>
                  <p>and white papers for B@Bs, tech startups and marketing agencies.</p> 
                <div className="email">
                    <h5>Email :</h5>
                    <p>myemail@gmail.com</p>
                    </div>
                    <div className="email">
                    <h5>Website :</h5>
                    <p>mywebsite.com</p>
                    </div>
                    
               
            </div>









        </div>



    )
}
export default First;
