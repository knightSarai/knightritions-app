import React from 'react';
import {withRouter} from 'react-router-dom'
import {auth, signInWithGoogle} from '../../../firebase/firebase.util';
import Input from '../Form-input'
import SignIn from './sign-in.styles';
import Button from '../Form-button'
class SignInForm extends React.Component{
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

    handleSubmit = async evt => {
        evt.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: "", password: ""})
            this.props.history.push('/')
        } catch (err) {
            console.error(err);
        }
        
    }
    render () {
        return (
            <SignIn >
                <h1>I Already Have An Account</h1>
                <span>Sign in with your email & password</span>
                <form onSubmit={this.handleSubmit}>
                    <Input label="Email" type="email" name="email" value={this.state.email} required handleChange={this.handleChange}/>
                    <Input label="Password" type="password" name="password" value={this.state.password} required onChange={this.handleChange}/>
                    <div className="buttons">
                        <Button type="submit">Sign in</Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</Button>
                    </div>
                </form>
            </SignIn>
        )
    }

}

export default withRouter(SignInForm)