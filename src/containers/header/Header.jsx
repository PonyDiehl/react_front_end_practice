import React from 'react';
import './header.css';
import people from '../../assets/Group 81.png'
import ai from '../../assets/Header Illustration.png'


const Header = () => {
  return (
    <div className='gpt4__header section__padding' id='home'>
      <div className='gpt4__header-content'>
        <h1 className='gradient__text'>Let's Build Something Amazing with Open AI's Chat GPT - 4.5 / Er Whatever Version it's On Now ') </h1>
        <p>I'm baby dSA marfa actually post-ironic. La croix edison bulb solarpunk messenger bag next level cupping jianbing yr semiotics pour-over. Irony cloud bread vibecession kale chips hoodie venmo deep v banh mi retro. Paleo occupy VHS lo-fi vibecession. Try-hard lo-fi before they sold out, austin wolf readymade etsy yes plz jawn fashion axe butcher retro slow-carb ethical gochujang. Single-origin coffee vibecession echo park craft beer health goth vape. XOXO fingerstache pabst hella. Dummy text? More like dummy thicc text, amirite?</p>
      <div className='gpt4__header-content__input'>
        <input type="email" placeholder="Your Email Address" />
        <button type='button'>Get Started</button>
      </div>
      <div className='gpt4__header-content__people'>
        <img src={people} alt='people'/>
        <p>500 trillion people requested access in the last 28 hours</p>
      </div>
      </div>
      <div className='gpt4__header-image'>
        <img src={ai} alt='ai'/>
      </div>
    </div>
  )
}

export default Header