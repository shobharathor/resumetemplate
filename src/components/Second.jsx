import React from "react";
import { BsSuitcaseLgFill } from "react-icons/bs";
import './Second.css'

function Second(){
    return(
        <div className="second">
            <div className="one">
            <BsSuitcaseLgFill />
            <h4>Work</h4>
            </div>

            <div className="two">
                <h3>Present</h3>
                <h3>2016</h3>
                <h3>2013-2015</h3>
                
            </div>

            <div className="two">
            <p style={{fontWeight:"bold"}}>Jessica Greene Marketing * Freelance Writer</p>
                <p>Create blog posts,landing pages, e-books, and case studies for clients</p>
                <p style={{fontWeight:"bold"}}>Kaiser Permanente * Lead Agile Product Owner</p>
                <p>Create blog posts,landing pages, e-books, and case studies for clients</p>
                <p style={{fontWeight:"bold"}}>Humana * Agile Product Owner</p>
                <p>Create blog posts,landing pages, e-books, and case studies for clients</p>
            </div>

            

        </div>

    )
}
export default Second;