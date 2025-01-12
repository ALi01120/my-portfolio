import React from "react";
import './styles/Nave.css';
const Navebare=()=>{
    return(
        <header>
        <div className="Container">
          <div className="grid navbar_grid">
            <div className="logo">
              <h1>Mr.</h1>
            </div>
            <div>
              <nav>
                <ul>
                  <li><a href="#/">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skill">Skills</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#contact">Get in Touch</a></li>
                </ul>
              </nav>
              
            </div>
          </div>
        </div>
      </header>
    );
};

export default Navebare;