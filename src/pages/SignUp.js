import React, { useRef, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./SignUp.module.css";
import foodBg from "../images/foodbg31.jpg";
const SignUp = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const choosePasswordRef = useRef();
  const confirmPasswordRef = useRef();
  // let passwordMatch = true;
  let userId;

  const formSubmissionHandler = (e) => {
    setIsSigningUp(true);
    e.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredChoosePassword = choosePasswordRef.current.value;
    const enteredConfirmPassword = confirmPasswordRef.current.value;
    if (enteredChoosePassword !== enteredConfirmPassword) {
      alert("passwords do not match");
    }
    /////////////Signing up the user
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCo1KQ55TDors5RWaJW39O6qsneUZdIGCk",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredConfirmPassword,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        setIsSigningUp(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json.then((data) => {
            let errorMessage = "Authentication Failed";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        userId = data.localId;
        // console.log(data.localId);
        /////////Getting Generated localId
        return userId;
      })
      .catch((error) => {
        alert(error.message);
      })
      .then(() => {
        /////////Pushing data to the Db with LocalId

        fetch(
          "https://foodyproject-baf67-default-rtdb.firebaseio.com/Users.json",
          {
            method: "POST",
            body: JSON.stringify({
              id: userId,
              fName: enteredName,
              email: enteredEmail,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );
      });

    console.log(
      enteredName,
      enteredEmail,
      enteredChoosePassword,
      enteredConfirmPassword
    );
  };
  return (
    <Fragment>
      <div className={classes.imgtag}>
        <img src={foodBg} alt="img" />
      </div>
      <form onSubmit={formSubmissionHandler} className={classes.signup}>
        <h2>SignUp</h2>
        <div className={classes.inputdiv}>
          <div>
            <label htmlFor="name">Full Name </label>
          </div>
          <div>
            <input type="text" id="name" ref={nameRef} />
          </div>
        </div>
        <div className={classes.inputdiv}>
          <div>
            <label htmlFor="email">Email </label>
          </div>
          <div>
            <input type="email" id="email" ref={emailRef} />
          </div>
        </div>
        <div className={classes.inputdiv}>
          <div>
            <label htmlFor="choosePassword">Choose Password </label>
          </div>
          <div>
            <input
              type="password"
              id="choosePassword"
              ref={choosePasswordRef}
            />
          </div>
        </div>
        <div className={classes.inputdiv}>
          <div>
            <label htmlFor="confirmPassword">Confirm Password </label>
          </div>
          <div>
            <input
              type="password"
              id="confirmPassword"
              ref={confirmPasswordRef}
            />
          </div>
          {/* {!passwordMatch && (
            <p style={{ textAlign: "center" }}>Passwords do not match</p>
          )} */}
        </div>
        <div>
          {!isSigningUp && <button>Sign Up</button>}
          {isSigningUp && <button>Signing you up...</button>}
        </div>
        <p>
          Existing user? <Link to="/login">Login</Link>
        </p>
      </form>
    </Fragment>
  );
};

export default SignUp;
