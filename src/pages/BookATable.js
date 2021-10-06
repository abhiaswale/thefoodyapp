import { useRef } from "react";
import classes from "./BookATable.module.css";
const BookATable = () => {
  let revData;

  const fNameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const personsRef = useRef("");
  const dateRef = useRef("");
  const messageRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredFName = fNameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPhoneNo = phoneRef.current.value;
    const enteredPersons = personsRef.current.value;
    const enteredDate = dateRef.current.value;
    const enteredMessage = messageRef.current.value;

    revData = (
      <div className={classes.successfullReservation}>
        <h3>Congrats!!,{enteredFName}</h3>
        <p>
          Your Reservation for {enteredPersons} on {enteredEmail} is Successfull
        </p>
      </div>
    );

    console.log(
      enteredFName,
      enteredEmail,
      enteredPhoneNo,
      enteredPersons,
      enteredDate,
      enteredMessage
    );
  };

  return (
    <div className={classes.bg}>
      <form onSubmit={submitHandler} className={classes.book}>
        <h2>Make a Reservation</h2>
        <div>
          <div className={classes.inputdiv}>
            <div>
              <label htmlFor="name">Full Name </label>
            </div>
            <div>
              <input type="text" id="name" ref={fNameRef} />
            </div>
          </div>
          <div className={classes.inputdiv}>
            <div>
              <label htmlFor="email">Email</label>
            </div>
            <div>
              <input type="email" id="email" ref={emailRef} />
            </div>
          </div>
          <div className={classes.inputdiv}>
            <div>
              <label htmlFor="phone">Phone </label>
            </div>
            <div>
              <input type="telephone" id="phone" ref={phoneRef} />
            </div>
          </div>

          <div className={classes.inputdiv}>
            <div>
              <label htmlFor="attendees">Number of Attendees </label>
            </div>
            <div>
              <select id="attendees" ref={personsRef}>
                <option value="" hidden></option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6">6 People</option>
              </select>
            </div>
          </div>
          <div className={classes.inputdiv}>
            <div>
              <label htmlFor="date">Date </label>
            </div>
            <div>
              <input type="date" id="date" ref={dateRef} />
            </div>
          </div>
          <div className={classes.inputdiv}>
            <div>
              <label htmlFor="msg">Your Message</label>
            </div>
            <div>
              <input type="text" id="message" ref={messageRef} />
            </div>
          </div>
          <div className={classes.center}>
            <button>Make reservation</button>
          </div>
        </div>
        <div> {revData}</div>
      </form>
    </div>
  );
};

export default BookATable;
