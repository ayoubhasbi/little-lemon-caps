import mario_adrian_1 from "../../../assets/mario_adrian_1.jpg";
import mario_adrian_2 from "../../../assets/mario_adrian_2.jpg";
const About = () => {
  return (
    <section className="about mb-5">
      <div className="container px-lg-5 py-5">
        <div className="row px-2 justify-content-md-between justify-content-center align-items-center">
          <div className="about__info col-12 col-md-6">
            <h1 className="section__title black__title">Little lemon</h1>
            <h2 className="about__title mb-5">Chikago</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur Sed faucibus lorem diam non
              blandit Lorem ipsum dolor sit amet consectetur Sed faucibus lorem
              diam non blandit Ultricies eleifend est sapien non egestas
              Ultricies eleifend est sapien non egestas.
            </p>
          </div>
          <div className="about__image col-12 col-md-6">
            <img src={mario_adrian_1} />
            <img src={mario_adrian_2} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
