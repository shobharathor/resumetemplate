import React from "react";
import { FaClipboardList } from "react-icons/fa"
import './Third.css'

function Third(){
    return(
        <div className="maincontainer">

            <div className="Third">
            <FaClipboardList />
            <h3>Skills & Sample</h3>
            </div>

            <div className="option">
                <h5>Writing</h5>
                <h5>Editing</h5>
                <h5>Social Media</h5>
                <h5>Researching</h5>
                <h5>SEO</h5>
             </div>

             <div className="lastpara">

             <div className="last">
                <h4>Zapier</h4>
                <h4>Spoke</h4>
                <h4>nDash</h4>
             </div>

             <div className="para">
                
           <p>Organize Your Life with the Agile method</p>
           <p>Is 40 hours a week too much? Here what history and science say</p>
           <p>Why Generalist Writers Lead to Lost Profits in B2B Tech</p>
             </div>

             </div>

        </div>

    )
}
export default Third;