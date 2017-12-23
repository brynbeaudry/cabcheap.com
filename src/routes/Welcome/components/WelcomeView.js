import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import LoginStateImage from '../assets/LoginStates.png'
import SchemaImage from "../assets/CabcheapSchema.png"
import UIGifImage from "../assets/UIDemoG.gif"
import './WelcomeView.scss'
import Paper from 'material-ui/Paper'

export const WelcomeView = () => (
  <div className='centerBlock' style={{ marginLeft: 2 + 'em', marginRight: 2 + 'em' }}>
    <h4 className='title'>Welcome!</h4>
    <Paper>
      <p>December 20th, 2017 :</p>
      <p>The website is a functioning React Redux Authentication system, for a pet project which I would be excited about pursuing if I wasn&rsquo;t MORE excited about full time work. Having developed many projects using JavaScript, I think React Redux makes a very progressive JavaScript Web client because of its sophisticated state management.</p>
      <Paper>
      <p>I implemented Google&rsquo;s Material UI for its layout, so that I could focus on learning Redux<br />
        However, This is something along the lines of what this page could be.</p>
    </Paper>
    <Paper>
      <img alt='UiGifDemo' className='centerBlock' src={UIGifImage} />
    </Paper>
      <p>Whenever I learn something new for web development, I tend to focus on the authentication.<br />
        I especially like Redux promise middleware for its very readable and well-defined actions for asynchronous requests. Just as an example, login actions are either fulfilled, rejected, or pending, which is directly tied to expected outcomes for the app&rsquo;s global state.</p>

      <p>Here&rsquo;s a look at what goes on with the state when someone tries to login. This was done in very short order while learning Redux, and will definitely be scrapped if rebuilt.</p>
    </Paper>
    <Paper>
      <img alt='LoginState' className='centerBlock' src={LoginStateImage} />
    </Paper>
    <Paper>
      <p>This HTTPS front end interfaces with a separate secure PHP backend at<br />
        https://api.cabcheap.com <br />
        Don&rsquo;t worry, my web services bill is very low because everything is done on Ubuntu.</p>

      <p>Here is the current schema so far:</p>
    </Paper>
    <Paper>
      <img alt='SchemaImg' className='centerBlock' src={SchemaImage} />
    </Paper>
    
    {/* <img alt='' className='duck' src={DuckImage} /> */ }
  </div >
)

export default WelcomeView
