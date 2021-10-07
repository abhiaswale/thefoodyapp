import React, { useState } from "react";
import classes from "./HomePage.module.css";
import {
  GiKnifeFork,
  GiFlatfish,
  GiCoffeeCup,
  GiChickenOven,
} from "react-icons/gi";
import { FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import Footer from "../Components/Layout/Footer";

import { useHistory } from "react-router";
const HomePage = () => {
  const history = useHistory();
  const [isFeedbackGiven, setIsFeedbackGiven] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const getStarterdHandler = (e) => {
    e.preventDefault();
    history.push("/menu");
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const msgChangeHandler = (e) => {
    setMsg(e.target.value);
  };

  const feedBackHandler = (e) => {
    e.preventDefault();

    if (
      name.trim().length === 0 &&
      email.trim().length === 0 &&
      msg.trim().length === 0
    ) {
      alert("Invalid Data");
      return;
    }

    const sendFeedback = async () => {
      await fetch(
        "https://foodyproject-baf67-default-rtdb.firebaseio.com/contactus.json",
        {
          method: "POST",
          body: JSON.stringify({
            name: name,
            email: email,
            message: msg,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
    };
    sendFeedback();
    setIsFeedbackGiven(true);
    setTimeout(() => {
      setIsFeedbackGiven(false);
    }, 3000);

    setEmail("");
    setName("");
    setMsg("");
  };

  let content;
  if (isFeedbackGiven) {
    console.log("feedback sent successfully");
    content = <h1>Thank You for your feedback</h1>;
  }
  return (
    <div>
      <div className={classes.bg}>
        <h1 className={classes.text}>ENJOY YOUR FOOD AT FOODY!</h1>
        <p>
          Food is as much about the moment, the occasion, the location and the
          company as it is about the taste.
        </p>
        <button onClick={getStarterdHandler} className={classes.headerbutton}>
          Get Started!
        </button>
      </div>
      <section className={classes.features}>
        <div className={classes.columnwrapper}>
          <div className={classes.column}>
            <GiKnifeFork style={{ fontSize: "3rem" }} />
            <p className={classes.ico}>ENJOY EATING</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={classes.column}>
            <GiFlatfish style={{ fontSize: "3rem" }} />
            <p className={classes.ico}>FRESH SEA FOODS</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={classes.column}>
            <GiCoffeeCup style={{ fontSize: "3rem" }} />
            <p className={classes.ico}>CUP OF COFFEE</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={classes.column}>
            <GiChickenOven style={{ fontSize: "3rem" }} />
            <p className={classes.ico}>MEAT EATERS</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>
      <div className={classes.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5633.503182277999!2d73.80081686567132!3d19.991665527522077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeae340b32e15%3A0xcf37e8d2529426e4!2sDomino&#39;s%20Pizza!5e0!3m2!1sen!2sin!4v1633413780686!5m2!1sen!2sin"
          style={{
            width: "100%",
            height: "450px",

            allowfullscreen: "",
            loading: "lazy",
          }}
          title="map"
        ></iframe>
      </div>
      <section className={classes.contactwrapper}>
        <div className={classes.banner}>
          <p>CONTACT US</p>
        </div>
        <div className={classes.addresswrapper}>
          <form className={classes.addressform} onSubmit={feedBackHandler}>
            <input
              type="text"
              placeholder="Name"
              onChange={nameChangeHandler}
              value={name}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={emailChangeHandler}
              value={email}
            />
            <input
              type="text"
              placeholder="Message"
              onChange={msgChangeHandler}
              value={msg}
            />
            <div className={classes.sendDiv}>
              <button className={classes.send}>Send</button>
            </div>
            <div style={{ textAlign: "center" }}>{content}</div>
          </form>
          <div className={classes.address}>
            <h3>Address</h3>
            <address>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              temporibus corporis ea non consequatur porro corrupti hic
              voluptatibus assumenda, doloribus.
            </address>
            <div className={classes.iconswrapper}>
              <div>
                <FiPhone />
                8888800000
              </div>
              <div>
                <HiOutlineMail /> contact@foody.com
              </div>
              <div>
                <HiOutlineLocationMarker /> Street,some city,India
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default HomePage;
