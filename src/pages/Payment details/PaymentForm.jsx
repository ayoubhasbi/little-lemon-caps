import "./PaymentForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import useSubmit from "../../hooks/useSubmit";
import { useAlertContext } from "../../context/alertContext";
const PaymentForm = () => {
  const navigate = useNavigate();
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      card_number: "",
      exp_date: "",
      cvv: "",
      name: "",
    },
    onSubmit: (values) => {
      submit("/", values).then(onOpen(response.type, response.message)).then();
      //   ((res) => {
      //     if (res.type === "success") {
      //       formik.resetForm();
      //     }
      //   })(response)
      // ();
    },
    validationSchema: Yup.object({
      card_number: Yup.number().required("Required"),
      exp_date: Yup.string().required("Required"),
      cvv: Yup.number().required("Required"),
      name: Yup.string().required("Required"),
    }),
  });
  return (
    <section className="payment-form">
      <div className="payment-form__title">
        <button className="icon" onClick={() => navigate("/booking-form")}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h1 className="section__title reservation__title">Payment details</h1>
      </div>
      <div className="container container__form bg-light px-3 px-lg-5 py-5 d-md-flex align-items-center">
        <div className="card box2 shadow-sm">
          <div className="d-flex align-items-center justify-content-between p-md-5 p-4">
            <span className="h5 fw-bold m-0">Payment methods</span>
            <div className="btn btn-primary bar"></div>
          </div>
          <ul className="nav nav-tabs mb-3 px-md-4 px-2">
            <li className="nav-item">
              <a className="nav-link px-2 active" aria-current="page" href="#">
                Credit Card
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2" href="#">
                Paypal
              </a>
            </li>
            <li className="nav-item ms-auto">
              <a className="nav-link px-2" href="#">
                + More
              </a>
            </li>
          </ul>
          <div className="px-md-5 px-4 mb-4 d-flex align-items-center">
            <div className="btn btn-success me-4"></div>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autoComplete="off"
                checked
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio1">
                <span className="pe-1">+</span>5949
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio2">
                <span className="lpe-1">+</span>3894
              </label>
            </div>
          </div>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            <div className="row">
              <div className="col-12">
                <div className="d-flex flex-column px-md-5 px-4 mb-4">
                  <span>Credit Card</span>
                  <div className="inputWithIcon">
                    <input
                      className="form-control"
                      type="text"
                      name="card_number"
                      value={formik.values.card_number}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <div className="error-message">
                      {formik.errors.card_number}
                    </div>
                    <img
                      src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png"
                      className="masterCard-img"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4">
                  <span>
                    Expiration<span className="ps-1">Date</span>
                  </span>
                  <div className="inputWithIcon">
                    <input
                      type="text"
                      className="form-control"
                      name="exp_date"
                      value={formik.values.exp_date}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <div className="error-message">
                      {formik.errors.exp_date}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                  <span>Code CVV</span>
                  <div className="inputWithIcon">
                    <input
                      type="password"
                      className="form-control"
                      name="cvv"
                      value={formik.values.cvv}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <div className="error-message">{formik.errors.cvv}</div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex flex-column px-md-5 px-4 mb-4">
                  <span>Name</span>
                  <div className="inputWithIcon">
                    <input
                      className="form-control text-uppercase"
                      type="text"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <div className="error-message">{formik.errors.name}</div>
                  </div>
                </div>
              </div>
              <div className="col-12 px-md-5 px-4 mt-3">
                <button className="btn btn-primary w-100" disabled={isLoading}>
                  Pay $599.00
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="card box1 shadow-sm p-md-5 p-md-5 p-4">
          <div className="fw-bolder mb-4">
            <span className="ps-1">599,00</span>
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center justify-content-between text">
              <span className="">Commission</span>{" "}
              <span className="fas fa-dollar-sign">
                <span className="ps-1">1.99</span>
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between text mb-4">
              <span>Total</span>

              <span className="ps-1">600.99</span>
            </div>
            <div className="border-bottom mb-4"></div>
            <div className="d-flex flex-column mb-4">
              <span className="ps-2">Invoice ID:</span>
              <span className="ps-3">SN8478042099</span>
            </div>
            <div className="d-flex flex-column mb-5">
              <span className="far fa-calendar-alt text">
                <span className="ps-2">Next payment:</span>
              </span>{" "}
              <span className="ps-3">22 july,2018</span>
            </div>
            <div className="d-flex align-items-center justify-content-between text mt-5">
              <div className="d-flex flex-column text">
                <span>Customer Support:</span> <span>online chat 24/7</span>
              </div>
              <div className="btn btn-primary rounded-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PaymentForm;
