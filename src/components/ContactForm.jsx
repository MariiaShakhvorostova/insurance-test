import contactIllustration from "../assets/contact-illustration.png";

// eslint-disable-next-line react/prop-types
const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <section className="contact-form">
      <div className="container">
        <div className="form">
          <h2>Замовити дзвінок</h2>
          <p>
            Ми завжди на звязку, готові до діалогу. Будь ласка, заповніть форму
            нижче, і ми звяжемося з вами найближчим часом.
          </p>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ваше ім'я" required />
            <input type="tel" placeholder="+38(050)-999-99-99" />
            <button type="submit">Замовити дзвінок</button>
          </form>
        </div>
        <div className="illustration">
          <img src={contactIllustration} alt="Contact Illustration" />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
