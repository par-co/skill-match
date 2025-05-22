import "./Contact.css";
import { Form, useActionData } from "react-router-dom";

export default function Contact() {
  const emptyOrInvalid = useActionData();

  return (
    <main className="contact">
      <h2>Contact Us</h2>

      <Form method="post" action="/contact" noValidate>
        <label htmlFor="email">Your email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required
        />
        {emptyOrInvalid?.email && (
          <p className="emptyOrInvalid">{emptyOrInvalid.email}</p>
        )}

        <label htmlFor="message">Your message:</label>
        <textarea id="message" name="message" placeholder="message" required />
        {emptyOrInvalid?.message && (
          <p className="emptyOrInvalid">{emptyOrInvalid.message}</p>
        )}

        <button className="btn">Submit</button>
      </Form>
    </main>
  );
}
