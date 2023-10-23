import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../../Firebase/Firebase.init';



const auth = getAuth(app);

const SignUp = () => {

    const [sUser, setUser] = useState({})
    console.log(sUser);


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const loGinWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setUser(user);

        }).catch(error => console.log("This Is Big ErroR in React", error))

    }


    const loGinWithGitHub = () => {
        signInWithPopup(auth, githubProvider)
        .then((result) => {
            const user = result.user;
            setUser(user);
            console.log(user);

        }).catch(error => console.log("This Is Big ErroR in React", error))

    }

    const SignOut = () => {
        signOut(auth)
        .then(() => {

            setUser({})
            
        }).catch((error) => console.log('LogOut', error));
    }






    return (
        <div>
             <div className="form signup">
                <div className="form-content">
                    <form action="#">
                        <div className="field input-field">
                            <input type="email" placeholder="Email" className="input"/>
                        </div>
                        <div className="field input-field">
                            <input type="password" placeholder="Create password" className="password"/>
                        </div>
                        <div className="field input-field">
                            <input type="password" placeholder="Confirm password" className="password"/>
                        </div>
                        <div className="field button-field">
                            <button>Signup</button>
                        </div>
                    </form>
                </div>
                <div className="line"></div>
                <div className="media-options">
                    <a href="#" className="field google">
                    <i class="fa-brands fa-google google-icon"></i>
                        <span onClick={loGinWithGoogle}>Login with Google</span>
                    </a>
                </div>
                
                <div className="media-options">
                    <a href="#" className="field facebook">
                    <i class="fa-brands fa-github facebook-icon"></i>
                        <span onClick={loGinWithGitHub}>Login with GitHub</span>
                    </a>
                </div>
               
            </div>

            {
                sUser.uid && <div className='userItem'>
                    <div className='Sign'>
                    <button className='SignOut' onClick={SignOut}>SignOut</button>
                    </div>
                    <img src={sUser.photoURL} alt="" />
                    <h2>{sUser.displayName}</h2>
                    <h4>ProviderId : {sUser.providerId}</h4>
                    <h4>Email : {sUser.email}</h4>
                    <h4>CreationTime : {sUser.metadata.creationTime}</h4>
            </div>
            }
        </div>
    );
};

export default SignUp;