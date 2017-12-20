import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './WelcomeView.scss'

export const WelcomeView = () => (
  <div>
    <h4 className='title'>Welcome!</h4>
    <p>Hi, I'm Bryn : The cyberquatter of this domain</p>

    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
  </div>
)

export default WelcomeView
