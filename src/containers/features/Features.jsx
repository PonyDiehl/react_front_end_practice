import React from 'react';
import './features.css';
import Feature from '../../components /feature/Feature';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Im baby marfa keytar flannel readymade affogato neutral milk hotel pinterest next level kickstarter meh. Whatever cloud bread pok pok jianbing selvage.',
  },
  {
    title: 'Become the tended active',
    text: 'Im baby marfa keytar flannel readymade affogato neutral milk hotel pinterest next level kickstarter meh. Whatever cloud bread pok pok jianbing selvage.',
  },
  {
    title: 'Message or am nothing',
    text: 'Im baby marfa keytar flannel readymade affogato neutral milk hotel pinterest next level kickstarter meh. Whatever cloud bread pok pok jianbing selvage.',
  },
  {
    title: 'Really boy law county',
    text: 'Im baby marfa keytar flannel readymade affogato neutral milk hotel pinterest next level kickstarter meh. Whatever cloud bread pok pok jianbing selvage.',
  }
]
const Features = () => {
  return (
    <div className='gpt4__features section__padding' id='features'>
      <div className='gpt4__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into The Future Today & Make it Happen</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt4__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features