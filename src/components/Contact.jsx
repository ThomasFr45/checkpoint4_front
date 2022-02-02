import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_36gcnif',
      'template_nr41828',
      e.target,
      'user_NbSdt57RRlrN8ZTmba5lb'
    );
    alert('Thank you, for your message ! ');
    e.target.reset();
  };
  return (
    <div className="divContact">
      <form onSubmit={sendEmail}>
        <div className="divInput">
          <input
            type="text"
            className="texte"
            placeholder="What is it about?"
            name="subject"
            required="required"
          />
        </div>
        <div className="divInput">
          <input
            type="email"
            className="texte"
            placeholder="Type your email adress here."
            name="email"
            required="required"
          />
        </div>
        <div className="divMessage">
          <textarea className="message" name="message"></textarea>
        </div>
        <div className="divbutton">
          <input
            type="submit"
            className="contact-button"
            value="Submit"
            required
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Contact;