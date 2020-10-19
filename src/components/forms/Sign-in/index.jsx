import React from 'react';
import Input from '../Form-input'
import SignIn from './sign-in.styles';
import Button from '../Form-button'
export default class SignInForm extends React.Component{
    state = {
        email: '',
        password: ''
    }
    handleChange = evt => {
        const {name, value} = evt.target;
        this.setState({
            ...this.state,
            [name]: value 
        })
    }

    handleSubmit = evt => {
        evt.preventDefault();
        this.setState({email: "", password: ""})
    }
    render () {
        return (
            <SignIn onSubmit={this.handleSubmit}>
                <h1>I already have an account</h1>
                <span>Sign in with your email & password</span>
                <form>
                    <Input label="Email" type="email" name="email" value={this.state.email} required handleChange={this.handleChange}/>
                    <Input label="Password" type="password" name="password" value={this.state.password} required onChange={this.handleChange}/>
                    <Button type="submit">Sign in</Button>
                </form>
            </SignIn>
        )
    }

}
