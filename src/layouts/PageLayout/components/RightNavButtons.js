import React, { Component } from 'react'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router'

/* Some buttons :
Login
Register

They only show is the auth state is false
So, the state can be passed in, and buttons shown conditionally
*/

const styles = {
  navBarRightButton : {
    verticalAlign : 'middle',
    color : 'white',
  }
}

class RightNavButtons extends Component {
  constructor (props = null) {
    super(props)
  }

  render () {
    return (
      <div>
        <Link to='/login' activeClassName=''>
          <FlatButton
            label='Login'
            labelPosition='before'
            style={styles.navBarRightButton}
            containerElement='label'
            />
        </Link>
        <Link to='/register' activeClassName=''>
          <FlatButton
            label='Register'
            labelPosition='before'
            style={styles.navBarRightButton}
            containerElement='label'
            />
        </Link>
      </div>
    )
  }
}

/* This is a smart component, which needs to know whether or not the user is authorized. */
/* Technically the app bar should be a smart component, and pass this a state as props. */
const mapStateToProps = (state = null) => ({
  auth : state.auth
})

export default connect(mapStateToProps)(RightNavButtons)
