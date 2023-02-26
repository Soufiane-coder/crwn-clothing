import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    }

    hanldeChange = event => {
        const { value, name } = event.target;
        console.log(event.target);
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" onChange={this.hanldeChange} value={this.state.email} label="email" />
                    <FormInput type="password" name="password" onChange={this.hanldeChange} value={this.state.password} label="password" />
                    <div className="buttons">
                        <CustomButton type="submit" value="Submit form"> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> {' '} sign in with google {' '}</CustomButton>

                    </div>
                </form>
            </div >
        )
    }
}

export default SignIn;