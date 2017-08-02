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
        first_name : null,
        last_name : null,
        email : null,
        password : null,
      },
      password_confirm : null,
      submitDisabled : true,
    }
    this.handleChange = this.handleChange.bind(this)
    this.validatorListener = this.validatorListener.bind(this)
  }

  componentWillMount () {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== this.state.user.password) {
        return false
      }
      return true
    })
  }

  handleChange (event) {
    const { user } = this.state
    if (event.target.name !== 'password_confirm') {
      user[event.target.name] = event.target.value
      this.setState({ user })
    } else {
      this.setState({ password_confirm : event.target.value })
    }
  }

  validatorListener (result) {
    this.setState({ submitDisabled: !result })
  }

  // handleSubmit is called when the form is valid automatically
  handleSubmit () {
    this.props.register(this.state.user)
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
        >
          <TextValidator
            hintText='First Name'
            // errorText={this.props.errors.register.first_name}
            floatingLabelText='First Name'
            // multiLine={false}
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
            // errorText={this.props.errors.register.last_name}
            floatingLabelText='Last Name'
            // multiLine={false}
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
            // errorText={this.props.errors.register.email}
            floatingLabelText='Email'
            // multiLine={false}
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
            // errorText={this.props.errors.register.password}
            floatingLabelText='Password'
            // multiLine={false}
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
            // errorText={this.props.errors.register.confirm_password}
            floatingLabelText='Confirm Password'
            // multiLine={false}
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
  //errors : PropTypes.arrayOf(PropTypes.string)
}

export default Register
