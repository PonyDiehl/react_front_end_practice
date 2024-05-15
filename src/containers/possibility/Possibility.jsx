import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/Feature Image.png'
const Possibility = () => {
  return (
    <div className='gpt4__possibility section__padding' id='possibility' >
      <div className='gpt4__possibility-image'>
        <img src={possibilityImage} alt='possibility'/>
      </div>
      <div className='gpt4__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>I'm baby marfa keytar flannel readymade affogato neutral milk hotel pinterest next level kickstarter meh. Whatever cloud bread pok pok jianbing selvage.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility;