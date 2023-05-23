import { testimonialData } from "../../../../constants/data";
import Card from "./Card";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials" style={{ backgroundColor: "#495E57" }}>
      <div className={"container px-lg-5 py-5"}>
        <h1 className="section__title mb-5">Testimonials</h1>
        <div className="row px-2 justify-content-between">
          {testimonialData.map((item, index) => {
            return (
              <Card
                key={item.id}
                name={item.name}
                rating={item.rating}
                comment={item.comment}
                image={item.imageSrc()}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
