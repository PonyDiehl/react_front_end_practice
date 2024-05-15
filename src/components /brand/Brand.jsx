import React from 'react';
import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';

const Brand = () => {
  return (
    <div className='gpt4__brand section__padding'>
      <div>
        <img src={google} alt="google"></img>
      </div>
      <div>
        <img src={slack} alt="slack"></img>
      </div>
      <div>
        <img src={atlassian} alt="atlassin"></img>
      </div>
      <div>
        <img src={dropbox} alt="dropbox"></img>
      </div>
      <div>
        <img src={shopify} alt="shopify"></img>
      </div>
    </div>
  )
}

export default Brand