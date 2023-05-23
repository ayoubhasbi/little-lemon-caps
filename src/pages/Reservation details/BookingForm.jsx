import restaurant from "../../assets/little-lemon-restaurant.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./BookingForm.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const BookingForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "John",
      lastName: "Doe",
      bookingDate: "",
      bookingTime: "",
      numberOfGuests: "1",
      occasion: "",
    },
    onSubmit: (values) => {},
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      numberOfGuests: Yup.number().required("Required"),
    }),
  });
  return (
    <section className="reservation">
      <div className="payment-form__title">
        <button className="icon" onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h1 className="section__title reservation__title">Payment details</h1>
      </div>
      <div className="container px-lg-5 py-5">
        <div className="row">
          <div className="reservation__img col-12 col-md-6">
            <img
              src={restaurant}
              className="restaurant__img"
              alt="Little lemon restaurant"
            />
          </div>
          <div className="col-12 col-md-6">
            <form
              className="row g-3"
              onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit();
              }}
            >
              <div className="col-md-12">
                <label htmlFor="inputFirstName" className="form-label">
                  First Name
                </label>
                <input
                  name="firstName"
                  type="email"
                  className="form-control"
                  id="inputFirstName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
                <div className="error-message">{formik.errors.firstName}</div>
              </div>
              <div className="col-12">
                <label htmlFor="inputLastName" className="form-label">
                  Last Name
                </label>
                <input
                  name="lastName"
                  type="text"
                  className="form-control"
                  id="inputLastName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
                <div className="error-message">{formik.errors.lastName}</div>
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Booking Date
                </label>
                <input
                  name="bookingDate"
                  type="Date"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.bookingDate}
                />
                <div className="error-message">{formik.errors.bookingDate}</div>
              </div>

              <div className="col-12">
                <label htmlFor="inputState" className="form-label">
                  Booking Time
                </label>
                <select
                  name="bookingTime"
                  id="inputState"
                  className="form-select"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.bookingTime}
                >
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                </select>
                <div className="error-message">{formik.errors.bookingTime}</div>
              </div>
              <div className="col-12">
                <label htmlFor="inputCity" className="form-label">
                  Number of Guests
                </label>
                <input
                  name="numberOfGuests"
                  type="number"
                  className="form-control"
                  id="inputCity"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.numberOfGuests}
                />
                <div className="error-message">
                  {formik.errors.numberOfGuests}
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="inputState" className="form-label">
                  Occasion
                </label>
                <select
                  name="occasion"
                  id="inputState"
                  className="form-select"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.occasion}
                >
                  <option value="BirthDay">BirthDay</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Engagement">Engagement</option>
                </select>
                <div className="error-message">{formik.errors.occasion}</div>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-warning"
                  onClick={() => navigate("/payment-form")}
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
