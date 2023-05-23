const Card = ({ title, price, description, image }) => {
  return (
    <div className="card mx-auto mb-4" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top h-50" alt="dish_image" />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{title}</h5>
          <h5 className="card-title text-warning">{price}</h5>
        </div>

        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-warning">
          Order a delivery
        </a>
      </div>
    </div>
  );
};
export default Card;
