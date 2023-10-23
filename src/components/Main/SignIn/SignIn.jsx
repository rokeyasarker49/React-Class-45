import React from 'react';

const SignIn = () => {
    return (
        
        <div>
            <div className="form login">
                <div className="form-content">
                    <form action="#">
                        <div className="field input-field">
                            <input type="email" placeholder="Email" className="input"/>
                        </div>
                        <div className="field input-field">
                            <input type="password" placeholder="Password" className="password"/>
                        </div>
                        <div className="form-link">
                            <a href="#" className="forgot-pass">Forgot password?</a>
                        </div>
                        <div className="field button-field">
                            <button>Login</button>
                        </div>
                    </form>
                </div>
                <div className="line"></div>
                <div className="media-options">
                    <a href="#" className="field facebook">
                    <i class="fa-brands fa-facebook-f facebook-icon"></i>
                        <span>Login with Facebook</span>
                    </a>
                </div>
                <div className="media-options">
                    <a href="#" className="field google">
                    <i class="fa-brands fa-google google-icon"></i>
                        <span>Login with Google</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;