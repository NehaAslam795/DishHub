import { FaUtensils } from "react-icons/fa";
import logo from "../assets/logo.png";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-logo">

  <img src={logo} alt="DishHub AI Logo" className="footer-logo-img" />

  <h2>DishHub AI</h2>

</div>

      <p>

Create restaurant-quality recipes with the power of Artificial Intelligence.

      </p>

      <small>

© 2026 DishHub AI. All Rights Reserved.

      </small>

    </footer>

  );

}

export default Footer;