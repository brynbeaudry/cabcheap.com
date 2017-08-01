import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import RaisedButton from 'material-ui/RaisedButton'

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
      formIsValid : false,
    }
    this.handleChange = this.handleChange.bind(this)
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
    user[event.target.name] = event.target.value
    this.setState({ user })
  }

  // handleSubmit is called when the form is valid automatically
  handleSubmit () {
    //
    this.setState({ ...this.state, formIsValid:true })
  }

  onSumbit () {
    this.props.registerUser()
  }

  render () {
    return (
      <Paper
        style={paperStyle}
        zDepth={3}>
        <ValidatorForm
          ref='form'
          onSubmit={this.handleSubmit}
          onError={errors => console.log(errors)}
        >
          <TextValidator
            hintText='First Name'
            // errorText={this.props.errors.register.first_name}
            floatingLabelText='First Name'
            multiLine={false}
            name='first_name'
            id='first_name'
            validators={['required']}
            errorMessages={['First name is required']}
            onChange={this.handleChange}
          /><br />
          <TextValidator
            hintText='Last Name'
            // errorText={this.props.errors.register.last_name}
            floatingLabelText='Last Name'
            multiLine={false}
            name='last_name'
            validators={['required']}
            errorMessages={['Last name is required']}
            onChange={this.handleChange}
          /><br />
          <TextValidator
            hintText='Email'
            // errorText={this.props.errors.register.email}
            floatingLabelText='Email'
            multiLine={false}
            name='email'
            validators={['required', 'isEmail']}
            errorMessages={['Email is required', 'Please enter a valid email']}
            onChange={this.handleChange}
          /><br />
          <TextValidator
            hintText='Password'
            // errorText={this.props.errors.register.password}
            floatingLabelText='Password'
            multiLine={false}
            name='password'
            type='password'
            validators={['required']}
            errorMessages={['Password is required']}
            onChange={this.handleChange}
          /><br />
          <TextValidator
            hintText='Confirm Password'
            // errorText={this.props.errors.register.confirm_password}
            floatingLabelText='Confirm Password'
            multiLine={false}
            name='confirm_password'
            validators={['required', 'isPasswordMatch']}
            errorMessages={['Please confirm your password', 'Passwords do not match']}
            onChange={this.handleChange}
          /><br />
          <RaisedButton label='Register' primary style={buttonStyle}
            disabled={!!this.state.formIsValid} onClick={this.onSubmit} />
        </ValidatorForm>
      </Paper>
    )
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  errors : PropTypes.arrayOf(PropTypes.string)
}

export default Register
