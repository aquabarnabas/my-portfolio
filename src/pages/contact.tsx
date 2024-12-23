import "./contact.css";

const Contact: React.FC = () => {
  return (
    <main>
      <h1>Contact</h1>
      <form>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" placeholder="Enter name" required />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" placeholder="Enter Email" required />
        </div>
        <div>
          <label htmlFor="message">Message: </label>
          <textarea id="message" placeholder="Enter Message" required />
        </div>
        <button className="button" type="submit">
          Submit Form
        </button>
      </form>
    </main>
  );
};

export default Contact;
