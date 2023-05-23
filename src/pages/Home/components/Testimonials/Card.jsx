import star from "../../../../assets/review-star.png";
import greyStart from "../../../../assets/review-star-grey.png";
const Card = ({ name, rating, comment, image }) => {
  return (
    <div className="card text-center col-12 col-md-6 col-lg-3 mx-auto mb-4">
      <div className="mb-3">
        <p className="card__comment">{comment}</p>
      </div>
      <div className="img__container--2 mb-2">
        <img src={image} alt="client" />
      </div>
      <div className="card__info">
        <h5 className="card__title">{name}</h5>
        <div className="review d-flex justify-content-center">
          <span>{rating}</span>
          <img src={star} className="review__star" />
        </div>
      </div>
    </div>
  );
};
export default Card;
