import React, {Component} from 'react'
import { compose } from 'redux';
import {connect} from 'react-redux'
import {SignIn} from '../../actions'
import {withFirebase} from '../../services/index'
import Register from '../../pages/Register'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'



class SignUpContainer extends Component{
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }


    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()


        const {firebase, SignIn} = this.props
        const {firstName, lastName, email, password} = this.state

        firebase 
        .signUp(email, password)
        .then(success =>{
            const user = success.user

            const userData ={
                firstName,
                lastName,
                email
            }
           
            SignIn(userData)
           
            return firebase.addUser(user.uid, userData);
        })
        .then(()=> firebase.getUser(firebase.auth.currentUser.uid))
        .then(querySnapshot => {
            const userData = querySnapshot.data()
            SignIn(userData)
        })

        .catch(error => {
            const errorMessage = error.message;  
  
            this.setState({
              loading: false,
              error: (
                <Stack sx={{ width: '100%' }} spacing={2}>
                  <Alert variant="filled" severity="error">
                    {errorMessage}
                  </Alert>
                </Stack>
              )
            });          
        })
    }

    render(){
        return <Register onChange={this.handleChange} onSubmit={this.handleSubmit} />
    }
}

export default compose(
    connect(
        null, {SignIn}
    ), withFirebase
)(SignUpContainer)