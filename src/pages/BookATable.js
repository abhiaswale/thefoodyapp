import classes from "./BookATable.module.css";
const BookATable = () => {
  return (
    <div className={classes.bg}>
      <from className={classes.book}>
        <h2>Make a Reservation</h2>
        <div>
          <div className={classes.inputdiv}>
            <div>
              <label htmlFor="name">Full Name </label>
            </div>
            <div>
              <input type="text" id="name" />
            </div>
          </div>
          <div className={classes.inputdiv}>
            <div>
              <label htmlFor="email">Email</label>
            </div>
            <div>
              <input type="email" id="email" />
            </div>
          </div>
          <div className={classes.inputdiv}>
            <div>
              <label htmlFor="phone">Phone </label>
            </div>
            <div>
              <input type="telephone" id="phone" />
            </div>
          </div>

          <div className={classes.inputdiv}>
            <div>
              <label htmlFor="attendees">Number of Attendees </label>
            </div>
            <div>
              <select id="attendees">
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
              <input type="date" id="date" placeholder="DD-MM-YYYY" />
            </div>
          </div>
          <div className={classes.inputdiv}>
            <div>
              <label htmlFor="msg">Your Message</label>
            </div>
            <div>
              <input type="text" id="message" />
            </div>
          </div>
          <div className={classes.center}>
            <button>Make reservation</button>
          </div>
        </div>
      </from>
    </div>
  );
};

export default BookATable;
