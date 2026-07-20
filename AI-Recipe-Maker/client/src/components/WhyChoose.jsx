import chef from "../assets/chef.png";

function WhyChoose() {
  return (
    <section className="why" id="why">
      <div className="why-left">

        <span className="section-tag">
          WHY CHOOSE US
        </span>

        <h2>
          Cook Smarter,
          <br />
          Not Harder
        </h2>

        <p>
          DishHub AI transforms the ingredients already available in your
          kitchen into delicious recipes within seconds. Whether you're a
          beginner or an experienced cook, our AI helps you prepare meals
          quickly and confidently.
        </p>

        <div className="why-list">
          <div className="why-item">AI Powered Recipes</div>
          <div className="why-item">Restaurant Quality Results</div>
          <div className="why-item">Healthy Meal Suggestions</div>
          <div className="why-item">Unlimited Recipe Generation</div>
        </div>

      </div>

      <div className="why-right">
        <img src={chef} alt="Chef" className="chef-img" />
      </div>

    </section>
  );
}

export default WhyChoose;