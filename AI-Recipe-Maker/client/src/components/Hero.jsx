import hero from "../assets/hero-food.png";

function Hero() {
  const scrollToGenerator = () => {
    const section = document.getElementById("generator");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <span className="tag">
          🍴 AI Recipe Generator
        </span>

        <h1>
          What's Cooking
          <br />
          <span>Today?</span>
        </h1>

        <p>
          Turn the ingredients already available in your kitchen
          into delicious restaurant-quality recipes using AI.
        </p>

        <div className="hero-buttons">

          <button
            className="primary"
            onClick={scrollToGenerator}
          >
            Start Cooking
          </button>

        </div>

      </div>

      <div className="hero-right">
        <img src={hero} alt="Food" />
      </div>

    </section>
  );
}

export default Hero;