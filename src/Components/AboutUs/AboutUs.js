import classes from "./AboutUs.module.css";
import AboutusImg from "../../images/1.jpg";
import Footer from "../Layout/Footer";
console.log(AboutusImg);
const AboutUs = () => {
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
            <p>
              <h1>Fried Egg and Bread Platter</h1>
              volutpat odio facilisis mauris sit amet massa vitae tortor
              condimentum lacinia quis vel eros donec ac odio tempor orci
              dapibus ultrices in iaculis nunc sed augue lacus viverra vitae
              congueneque aliquam vestibulum morbi blandit cursus risus at
              ultrices mi tempus imperdiet nulla malesuada pellentesque elit
              eget gravida cum sociis
            </p>
          </div>
          <div>
            <p>
              <h1>Fried Egg and Bread Platter</h1>
              neque aliquam vestibulum morbi blandit cursus risus at ultrices mi
              tempus imperdiet nulla malesuada pellentesque elit eget gravida
              cum sociis natoque penatibus et magnis dis parturient montes
              nascetur ridiculus musneque aliquam vestibulum morbi blandit
              cursus risus at ultrices mi tempus imperdiet nulla malesuada
              pellentesque elit eget gravida cum sociis
            </p>
          </div>
          <div>{<img src={AboutusImg} alt="img" />}</div>
          <div>{<img src={AboutusImg} alt="img" />}</div>
          <div>
            <p>
              <h1>Fried Egg and Bread Platter</h1>
              amet venenatis urna cursus eget nunc scelerisque viverra mauris in
              aliquam sem fringilla ut morbi tincidunt augue interdum velit
              euismod in pellentesque massa placerat duis ultricies lacus sed
              turpis tinciduntneque aliquam vestibulum morbi blandit cursus
              risus at ultrices mi tempus imperdiet nulla malesuada pellentesque
              elit eget gravida cum sociis
            </p>
          </div>
        </div>
      </section>
      <div className={classes.banner}>
        <p>WE MAKE DELICIOUS AND NUTRITIOUS FOOD </p>
        <button>Book a Table</button>
      </div>
      <Footer />
    </div>
  );
};
export default AboutUs;
