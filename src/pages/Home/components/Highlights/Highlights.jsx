import Card from "./Card";
import { highlightData } from "../../../../constants/data";
const Highlights = () => {
  return (
    <section className="highlight">
      <div className=" container px-3 px-lg-5 py-5">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h1 className="section__title black__title">This week specials!</h1>
          <a href="#" className="btn btn-warning px-4 py-2">
            Online menu
          </a>
        </div>
        <div className="d-md-flex justify-content-between">
          {highlightData.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                image={item.imageSrc()}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Highlights;
