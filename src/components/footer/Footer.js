import React from "react";
import "./footer.css";
const Footer =()=>{

    let currentYear = new Date().getFullYear();
   

    return(
        <div className="footer">
            <p>Copyright @ {currentYear} </p>
        </div>
    )
}

export default Footer
