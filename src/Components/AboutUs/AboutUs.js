import classes from "./AboutUs.module.css";
import AboutusImg from "../../images/1.jpg";
import Footer from "../Layout/Footer";
import { useHistory } from "react-router";
import Button from "../Ui/Button";

const AboutUs = () => {
  const history = useHistory();
  const bookTable = () => {
    history.push("./tablebooking");
  };

  return (
    <div>
      <div className={classes.bg}>
        <span className={classes.aboutus}>About Us</span>
      </div>
      <div className={classes.aboutusHeader}>The Best Restaurant in Town</div>
      <section className={classes.aboutsection}>
        <div className={classes.aboutusContent}>
          <div>{<img src={AboutusImg} alt="img" />}</div>
          <div>
            <p className={classes.aboutusheading}>
              Fried Egg and Bread Platter
            </p>
            volutpat odio facilisis mauris sit amet massa vitae tortor
            condimentum lacinia quis vel eros donec ac odio tempor orci dapibus
            ultrices in iaculis nunc sed augue lacus viverra vitae congueneque
            aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus
            imperdiet nulla malesuada pellentesque elit eget gravida cum sociis
          </div>
          <div>
            <p className={classes.aboutusheading}>
              Fried Egg and Bread Platter
            </p>
            neque aliquam vestibulum morbi blandit cursus risus at ultrices mi
            tempus imperdiet nulla malesuada pellentesque elit eget gravida cum
            sociis natoque penatibus et magnis dis parturient montes nascetur
            ridiculus musneque aliquam vestibulum morbi blandit cursus risus at
            ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget
            gravida cum sociis
          </div>
          <div>{<img src={AboutusImg} alt="img" />}</div>
          <div>{<img src={AboutusImg} alt="img" />}</div>
          <div>
            <p className={classes.aboutusheading}>
              Fried Egg and Bread Platter
            </p>
            amet venenatis urna cursus eget nunc scelerisque viverra mauris in
            aliquam sem fringilla ut morbi tincidunt augue interdum velit
            euismod in pellentesque massa placerat duis ultricies lacus sed
            turpis tinciduntneque aliquam vestibulum morbi blandit cursus risus
            at ultrices mi tempus imperdiet nulla malesuada pellentesque elit
            eget gravida cum sociis
          </div>
        </div>
        {/* ////////////////////// */}
        <div className={classes.aboutusContent1}>
          <div>
            <div>{<img src={AboutusImg} alt="img" />}</div>
            <div>
              <p className={classes.aboutusheading}>
                Fried Egg and Bread Platter
              </p>
              volutpat odio facilisis mauris sit amet massa vitae tortor
              condimentum lacinia quis vel eros donec ac odio tempor orci
              dapibus ultrices in iaculis nunc sed augue lacus viverra vitae
              congueneque aliquam vestibulum morbi blandit cursus risus at
              ultrices mi tempus imperdiet nulla malesuada pellentesque elit
              eget gravida cum sociis
            </div>
          </div>
          <div>
            <div>{<img src={AboutusImg} alt="img" />}</div>
            <div>
              <p className={classes.aboutusheading}>
                Fried Egg and Bread Platter
              </p>
              volutpat odio facilisis mauris sit amet massa vitae tortor
              condimentum lacinia quis vel eros donec ac odio tempor orci
              dapibus ultrices in iaculis nunc sed augue lacus viverra vitae
              congueneque aliquam vestibulum morbi blandit cursus risus at
              ultrices mi tempus imperdiet nulla malesuada pellentesque elit
              eget gravida cum sociis
            </div>
          </div>
        </div>
      </section>
      <div className={classes.banner}>
        <p>WE MAKE DELICIOUS AND NUTRITIOUS FOOD </p>
        <Button onClick={bookTable}>Book a Table</Button>
      </div>
      <Footer />
    </div>
  );
};
export default AboutUs;
