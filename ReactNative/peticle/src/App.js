import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


function App() {


  return (
    <nav class="navbar">
        <div class="navbar_logo">
            <a href="#"><img class="logo" src="image/peticle_logo.png"/></a>
            <a href="#">Peticle</a>
        </div>
        <ul class="navbar_menu">
            <li><a href="">회사소개</a></li>
            <li><a href="">제품소개</a></li>
            <li><a href="">문의하기</a></li>
        </ul>
        <ul class="navbar_social">
           <li><a href="http://facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
           <li><a href="http://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
        </ul>
        <a href="#" class="navbar_toogleBtn">
            <FontAwesomeIcon icon={faBars} />
        </a>
    </nav>
    
  );
}

export default App;
