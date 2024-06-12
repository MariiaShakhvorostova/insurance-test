import { useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Benefits from "./components/Benefits";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import ThxPage from "./components/thxPage";
import "./App.css";

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      {submitted && <ThxPage />}
      {!submitted && (
        <div>
          <Header />
          <Products />
          <Benefits />
          <AboutUs />
          <ContactForm onSubmit={handleSubmit} />
        </div>
      )}
    </div>
  );
};

export default App;
