import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./pages/Home/components/Header";
import BookingForm from "./pages/Reservation details/BookingForm";
import PaymentForm from "./pages/Payment details/PaymentForm";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <ChakraProvider>
        <AlertProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking-form" element={<BookingForm />} />
            <Route path="/payment-form" element={<PaymentForm />} />
          </Routes>
          <Alert />
        </AlertProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
