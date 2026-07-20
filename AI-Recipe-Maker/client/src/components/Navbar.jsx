import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src={logo}
          alt="DishHub AI Logo"
          className="logo-img"
        />

        <div>
          <h2>DishHub AI</h2>
          <small>Smart Recipe Generator</small>
        </div>
      </div>

      <ul>
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#why">Why Us</a>
        </li>

        <li>
          <a href="#categories">Categories</a>
        </li>

        <li>
          <a href="#generator">Generate</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;