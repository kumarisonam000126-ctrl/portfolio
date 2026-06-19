import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">

      <h1>Contact Me</h1>

      <div className="contact-container">

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;