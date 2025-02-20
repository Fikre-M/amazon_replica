// *Updated 
import React, { useState, useContext } from "react";
import classes from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Utility/firebase"; 
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import { DataContext } from "../../Components/DataProvider/Dataprovider";
import { Type } from "../../Utility/action.type";
// import { FadeLoader } from "react-loader-spinner";


function Auth() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn:false,
    signUp:false
  })
  // console.log(password, email);

  const [{user}, dispatch] = useContext(DataContext)
  console.log(user);
  const navigate = useNavigate()


  const authHandler =async(e)=> {
    e.preventDefault()
    // console.log(e); //to see both
    console.log(e.target.name);
    if (e.target.name === `signin`) {

      //firebase auth
      setLoading({...loading, signin:true})//to define the signup value in object format
      signInWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        // console.log(userInfo);
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user
        })
        setLoading({ ...loading, signin:false });
        navigate("/")
      }).catch((err) => {
        // console.log(err);
        setError(err.message);
        setLoading({ ...loading, signin: false });
      });
    }else{
      setLoading({...loading, signUp:true});

      createUserWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        // console.log(userInfo);
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user
      })
      setLoading({...loading, signUp:false})
      navigate("/")
    }).catch((err) => {
        // console.log(err);
        setError(err.message);
        setLoading({...loading, signUp:false})
        // navigate("/");
      });
    }
  };

  return (
    <section className={classes.authContainer}>
      {/* Form */}
      <div className={classes.signinForm}>
        {/* Logo */}
        <Link to="/">
          <img
            className={classes.logo}
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Logo"
          />
        </Link>

        <form>
          <h1>Sign in</h1>
          <div className={classes.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className={classes.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.loginSigninButton}
          >
            {" "}
            {loading.signIn ? (
              <FadeLoader color="#000" size={15} />
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* Agreement */}
        <p className={classes.agreementText}>
          By continuing, you agree to Amazon's FAKE CLONE{" "}
          <Link to="">Conditions of Use </Link>and{" "}
          <Link to="">Privacy Notice</Link>.
        </p>

        {/* Account Button */}
        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={classes.createAccountButton}
        >
          {loading.siginUp ? (
            <FadeLoader color="#000" size={15} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;





















































































// import React from 'react'
// import classes from './Signup.module.css'
// import { Link } from 'react-router-dom';
// // import Layout from '../../Components/Layout/Layout'

// function Auth() {
//   return (
//     // <Layout>
//     // <div>Signup</div>
//     // </Layout>
//     <section>
//       {/* logo */}
//       <Link rel="stylesheet" href="">
//         <img src="" alt="" />
//       </Link>

//       {/* form */}
//       <div className={classes.signin_form}>
//         <form action="">
//           <div>
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" />
//           </div>
//           <button className={classes.login_signinButton}>Sign in</button>
//         </form>
//         {/* Agreeement */}
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime vero ipsum dolores earum voluptatibus dolorum sit commodi, provident at minus officia, obcaecati ipsa nulla. Quos pariatur explicabo recusandae et ea.</p>

//         {/* Account Button */}
//         <button>Creat your Amazon Account</button>
//       </div>
//     </section>
//   );
// }

// export default Auth


