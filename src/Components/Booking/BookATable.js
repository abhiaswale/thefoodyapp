import { useRef, useState } from "react";
import { useHistory } from "react-router";
import classes from "./BookATable.module.css";
const BookATable = () => {
  const [isBooking, setIsBooking] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isBooked, setisBooked] = useState(false);
  const history = useHistory();

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

    if (
      enteredFName.trim().length === 0 &&
      enteredEmail.trim().length === 0 &&
      enteredPhoneNo.trim().length === 0 &&
      enteredPersons.trim().length === 0 &&
      enteredDate.trim().length === 0
    ) {
      setIsFormValid(false);
      alert("Please Fill All fields");
      return;
    }

    setTimeout(() => {
      setIsFormValid(true);
    }, 2000);
    const bookingData = async () => {
      const response = await fetch(
        "https://foodyproject-baf67-default-rtdb.firebaseio.com/bookings.json",
        {
          method: "POST",
          body: JSON.stringify({
            fullName: enteredFName,
            email: enteredEmail,
            phoneNo: enteredPhoneNo,
            persons: enteredPersons,
            date: enteredDate,
            message: enteredMessage,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("There was some error processing your request");
      }
      setisBooked(true);
      setIsBooking(true);
    };

    bookingData().catch((err) => {
      alert(err.message);
    });
    setIsBooking(false);

    setTimeout(() => {
      history.push("/menu");
    }, 3000);
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
              <label htmlFor="date">Date</label>
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
            {!isBooking && <button>Make Reservation</button>}
            {isBooking && <button>Hang on,Booking a Table...</button>}
          </div>
        </div>
        {isFormValid && isBooked && (
          <div className={classes.successfullReservation}>
            <p>Booked successfully</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookATable;
