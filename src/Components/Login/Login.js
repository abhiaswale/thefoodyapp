import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";
import AuthContext from "../../store/auth-context";
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  const history = useHistory();
  const userNameRef = useRef();
  const passwordRef = useRef();
  let logId;

  const formSubmissionHandler = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const enteredEmail = userNameRef.current.value;
    const enteredPassword = passwordRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCo1KQ55TDors5RWaJW39O6qsneUZdIGCk",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            console.log(data);
            // let errorMessage = "Something went wrong"
            let errorMessage = data.error.message;
            throw new Error(errorMessage);
          });
        }
      })
      .then((result) => {
        // console.log("hi");
        console.log(result);
        authCtx.login(result.idToken);
        logId = result.localId;
        return logId;
      })
      .catch((err) => {
        alert(err.message);
      })
      ////////////////////Getting UserList From DB
      .then(() => {
        fetch(
          "https://foodyproject-baf67-default-rtdb.firebaseio.com/Users.json"
        )
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("Something went wrong!!!");
            }
          })
          .then((data) => {
            setIsLoading(false);

            const userInfo = [];
            for (const key in data) {
              if (logId === data[key].id) {
                userInfo.push({
                  firstName: data[key].fName,
                });
              }
            }
            authCtx.name(userInfo[0].firstName);
            history.push("/landingpage");
          })
          .catch((err) => {
            console.log(err);
          });
      });
    // console.log(enteredEmail, enteredPassword);
  };
  return (
    <div className={classes.bg}>
      <form onSubmit={formSubmissionHandler} className={classes.login}>
        <h2>Login</h2>
        <div className={classes.inputdiv}>
          <div>
            <label htmlFor="username">Email</label>
          </div>
          <div>
            <input
              type="text"
              id="username"
              ref={userNameRef}
              placeholder="Type your email"
              required
            />
          </div>
        </div>
        <div className={classes.inputdiv}>
          <div>
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              placeholder="Type your password"
              required
            />
          </div>
        </div>
        <div>
          {!isLoading && <button>LOGIN</button>}
          {isLoading && <button>Logging you in...</button>}
        </div>
        <p style={{ color: "white" }}>
          New user? <Link to="/signup">Signup</Link>
          {/* <Link to="/landingpage"> landing Page</Link> */}
        </p>
      </form>
    </div>
  );
};

export default Login;
