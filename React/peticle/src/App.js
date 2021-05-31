import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function App() {  


  return (
    //NavBar
    <nav class="navbar">
        <div class="navbar_logo">
            <a href="#"><FontAwesomeIcon icon={faDog} /></a>
            <a href="#">Peticle</a>
        </div>
        <ul class="navbar_menu">
            <li><a href="#">회사소개</a></li>
            <li><a href="#">제품소개</a></li>
            <li><a href="#">문의하기</a></li>
        </ul>
        <ul class="navbar_icon">
           <li><a href="http://facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
           <li><a href="http://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
        </ul>
        <button class="navbar_toogleBtn" onPress={()=>{alert("1")}} >
            <FontAwesomeIcon icon={faBars} />
        </button>
    </nav>
    
    //Header

    //Main

    //Footer
    
  );
}

export default App;
