import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {signInwithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email : '',
            password : ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({email :'', password: ''})
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({ [name] : value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2 >I Already Have An Account</h2>
                <span>Sign In With Your Email And Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} label = 'email' required handleChange={this.handleChange} />
                    <FormInput name="password" type="password" value = {this.state.password} label = 'password' required handleChange={this.handleChange} />

                    <div className="buttons">
                        <CustomButton type='Submit'>SIGN IN</CustomButton> 
                        <CustomButton onClick={signInwithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;