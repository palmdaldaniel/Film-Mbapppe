import styles from "../css/AboutPage.module.css";
import "../css/AboutPage.module.css";
//import chair from "/Users/blerta/Film-Mbapppe/frontend/src/red.jpeg";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.about2}></div>
      <div className={styles.aboutContainer}>
        <div className={styles.about}>
          <div className={styles.header}>
            <h1>Filmvisarna</h1>
            <h3>About us</h3>
          </div>
          <br />
          <p>
            {" "}
            Filmvissarnase is the oldest and first website dedicated exclusively
            to Malmö Cinema, and has been the most trusted cinema guide on the
            web for the past 22 years. Founded i n early 1995 at the dawn of
            commercial internet use, the website continues to be one of the
            world's highest ranked theatre websites and most trusted sources for
            Malmö theatre listings, news and reviews.
          </p>
          <br />
          <p>
            Founded by the original site Editor Darren Dalglish in 1995,
            LondonTheatre.co.uk was born from the growing need for UK and
            international fans of London theatre to read news, reviews and
            features. Growing quickly through the 90s, along with its first
            dedicated weekly theatre newsletter, the website built loyal
            visitors from around the world who would use the site to plan trips
            to the West End and beyond..
          </p>
        </div>

        <div className={styles.about1}>
          <div className="scheduleContainer">
            <h4>Address</h4>
            <p>Gustav Torg 1</p>
            <p>Malmö, Sweden</p>
            <br></br>
          </div>

          <div className="contactContainer">
            <div className="contact">
              <h4>Contact</h4>
              <p>filmvissarna@gmx.com</p>
              <p>070 98 76 12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
