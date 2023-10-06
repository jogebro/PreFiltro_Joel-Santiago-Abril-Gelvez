import './css/nav.css'
import React from "react";
import logoGAPA from "./assets/imgs/GAPA-logo.png"

export default function Navbar(){
    return(
       <header>
            <nav>
                <div className="content-img">
                    <img src={logoGAPA} alt=". . ."/>
                </div>
                <div>
                    <ul className="links">
                        <li>
                            <a href="/">Inicio</a>
                        </li>
                        <li>
                            <a href="/tienda">Tienda</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header> 
    )
}