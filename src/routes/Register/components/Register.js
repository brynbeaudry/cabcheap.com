import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'

/* The Register Form */
/*
First name
Last Name
email
password
confirm password

Verify that the passwords match on the front end

this.props.registerUser  - function on submit
this.props.errors

this.props.errors.register.first_name[0] for example will be the first error that comes back from the server

possibly need a function to check if all the fields are filled out before registering the user.

Handlesumbit should be the dispatch function register user passed in as props
*/
const paperStyle = {
  height: 'auto',
  width: 'auto',
  margin: '1em',
  display: 'block',
  textAlign : 'center',
}

const buttonStyle = {

}

const errorStyle = {
  position: 'absolute',
  marginBottom: '-22px',
  color: 'red',
}

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        first_name : undefined,
        last_name : undefined,
        email : undefined,
        password : undefined,
      },
      password_confirm : undefined,
      isAllFilled : false,
      submitDisabled : true,
    }
    this.handleChange = this.handleChange.bind(this)
    this.validatorListener = this.validatorListener.bind(this)
    this.checkUserData = this.checkUserData.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.register = props.register.bind(this)
    console.log('Props: ', props)
    console.log('this : ', this)
  }

  componentWillMount () {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule('isPasswordMatch', (value) =>
      this.state.user.password === this.state.password_confirm)
    /* Also need password length rule */
  }

  handleChange (event) {
    const { user } = this.state
    if (event.target.name !== 'password_confirm') {
      user[event.target.name] = event.target.value
      this.setState({ user, isAllFilled : this.checkUserData(user) })
    } else {
      this.setState({ password_confirm : event.target.value, isAllFilled : this.checkUserData(user) })
    }
  }

  checkUserData (user) {
    const pwc = this.state.password_confirm
    if (pwc === undefined || pwc === null || pwc === '') { return false }
    for (var key in user) {
      if (user.hasOwnProperty(key)) {
        if (user[key] === undefined || user[key] === null || user[key] === '') { return false }
      }
    }
    return true
  }

  validatorListener (result) {
    // console.log('is Valid', result, 'isAllFilled', this.state.isAllFilled)
    if (result && this.state.isAllFilled) {
      this.setState({ submitDisabled: false })
    } else {
      this.setState({ submitDisabled: true })
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    if (!this.state.submitDisabled) {
      const { user } = this.state
      console.log(user)
      this.props.register(user)
    }
  }

  render () {
    return (
      <Paper
        style={paperStyle}
        zDepth={3}>
        <ValidatorForm
          ref='form'
          onSubmit={this.handleSubmit}
          instantValidate
          onError={errors => alert(errors)}
        >
          <TextValidator
            hintText='First Name'
            floatingLabelText='First Name'
            name='first_name'
            value={this.state.user.first_name}
            id='first_name'
            validators={['required']}
            errorMessages={['First name is required']}
            onChange={this.handleChange}
            errorStyle={errorStyle}
            validatorListener={this.validatorListener}
          /><br />
          <TextValidator
            hintText='Last Name'
            floatingLabelText='Last Name'
            name='last_name'
            value={this.state.user.last_name}
            validators={['required']}
            errorMessages={['Last name is required']}
            onChange={this.handleChange}
            errorStyle={errorStyle}
            validatorListener={this.validatorListener}
          /><br />
          <TextValidator
            hintText='Email'
            floatingLabelText='Email'
            name='email'
            value={this.state.user.email}
            validators={['required', 'isEmail']}
            errorMessages={['Email is required', 'Please enter a valid email']}
            onChange={this.handleChange}
            errorStyle={errorStyle}
            validatorListener={this.validatorListener}
          /><br />
          <TextValidator
            hintText='Password'
            floatingLabelText='Password'
            name='password'
            value={this.state.user.password}
            type='password'
            validators={['required']}
            errorMessages={['Password is required']}
            onChange={this.handleChange}
            errorStyle={errorStyle}
            validatorListener={this.validatorListener}
          /><br />
          <TextValidator
            hintText='Confirm Password'
            floatingLabelText='Confirm Password'
            name='password_confirm'
            value={this.state.password_confirm}
            type='password'
            validators={['required', 'isPasswordMatch']}
            errorMessages={['Please confirm your password', 'Passwords do not match']}
            onChange={this.handleChange}
            errorStyle={errorStyle}
            validatorListener={this.validatorListener}
          /><br />
          <RaisedButton label='Register' primary style={buttonStyle}
            disabled={this.state.submitDisabled} type='submit' />
        </ValidatorForm>
      </Paper>
    )
  }
}
Register.propTypes = {
  register: PropTypes.func.isRequired,
  // errors : PropTypes.arrayOf(PropTypes.string)
}

export default Register
