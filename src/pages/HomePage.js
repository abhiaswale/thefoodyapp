import React from "react";
import classes from "./HomePage.module.css";
import {
  GiKnifeFork,
  GiFlatfish,
  GiCoffeeCup,
  GiChickenOven,
} from "react-icons/gi";
import { FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
const HomePage = () => {
  return (
    <div>
      <div className={classes.bg}>
        <h1 className={classes.text}>ENJOY YOUR FOOD AT FOODY!</h1>
        <p>
          Food is as much about the moment, the occasion, the location and the
          company as it is about the taste.
        </p>
        <button className={classes.headerbutton}>Get Started!</button>
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
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5633.503182277999!2d73.80081686567132!3d19.991665527522077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeae340b32e15%3A0xcf37e8d2529426e4!2sDomino&#39;s%20Pizza!5e0!3m2!1sen!2sin!4v1633413780686!5m2!1sen!2sin"
          style={{
            width: "100%",
            height: "450",
            style: "border:0;",
            allowfullscreen: "",
            loading: "lazy",
          }}
          title="map"
        ></iframe>
      </div>
      <section className={classes.contactwrapper}>
        <h1>Contact Us</h1>
        <div className={classes.addresswrapper}>
          <form className={classes.addressform}>
            <input type="text" placeholder="Name" />
            <input
              type="email"
              placeholder="Email"
              style={{ marginLeft: "15px" }}
            />
            <input
              type="text"
              placeholder="Message"
              style={{ width: "auto" }}
              size="46"
            />
            <div>
              <button className={classes.send}>Send</button>
            </div>
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
      <footer>
        <div className={classes.footericon}>
          <a href="/">
            <AiFillFacebook />
          </a>
          <a href="/">
            <AiFillTwitterCircle />
          </a>
          <a href="/">
            <AiFillInstagram />
          </a>
        </div>
        <div class={classes.copyrightwrapper}>&copy;All Rights Reserved</div>
      </footer>
    </div>
  );
};
export default HomePage;
