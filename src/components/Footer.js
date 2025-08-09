import {LINKEDIN_URL} from "../utils/constants";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By <span></span>
      <a
        href="https://www.linkedin.com/in/kunj-patel-01660203kp/"
        target="_blank"
        rel="noreferrer"
      >
        Kunj
      </a>
      <span>&copy; {year} </span>
      <strong>
        FOOD ORDERING APP 
      </strong>
    </div>
  );
};

export default Footer;