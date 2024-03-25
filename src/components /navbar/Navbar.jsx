import React from 'react';
import { RiMenu3Line, RiCloseLi } from 'react-icons/ri';
import logo from '../../assets/GPT-3.svg';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="gpt4__navbar">
      <div className="gpt4__navbar-links">
        <div className="gpt4__navbar-links_logo">
          <img src= {logo} alt="logo"/>
        </div>
        <div className="gpt4__navbar-links_container">
          <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt3'>What is GPT4?</a></p>
          <p><a href='#possibility'>Open AI</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar