import React from "react";  
import { Link } from 'react-router-dom';
import Mounting from "./Mounting";
function Navbar(){
    const navstyle = {
        color:'white'
    };
    return(
        
        <nav>
            <h1>Component Life Cycle</h1>
            <div className="navlinks">
                <Link style={navstyle} to="/Mounting">
                    <button>Mounting</button>
                </Link>
                <Link style={navstyle} to="/Updating">
                    <li>Updating</li>
                </Link>
                <Link style={navstyle} to="/UnMounting">
                    <li>Unmounting</li>
                </Link>
                </div>
                </nav>
                
    )

}
export default Navbar;