import hero_img from "../../../assets/restauranfood.jpg";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section style={{ backgroundColor: "#495E57" }}>
      <div className="container d-flex px-3 px-lg-5 py-5 justify-content-between">
        <div className="hero__info">
          <h1 className="section__title">Little lemon</h1>
          <h2 className="hero__title">Chikago</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur Sed faucibus lorem diam non
            blandit Ultricies eleifend est sapien non egestas.
          </p>
          <button
            onClick={() => navigate("/booking-form")}
            className="btn btn-warning"
          >
            Reserve a Table
          </button>
        </div>
        <div className="img__container">
          <img src={hero_img} className="hero__img img" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
