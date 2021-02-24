import React from 'react';
import SignIn from '../../singIn/sign-in.component';
import SignUp from  '../../sign-up/sign-up.component';
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUp = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUp;