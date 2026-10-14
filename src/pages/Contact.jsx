
import { useRef, useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function Contact() {
  const nameRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!/^[0-9+\-\s()]{7,20}$/.test(form.phone.trim())) {
      nextErrors.phone = "Enter a valid phone number.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Please enter your enquiry.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      if (nextErrors.name) nameRef.current?.focus();
      return;
    }

    setSubmitted(true);
    setForm(initialForm);
    setErrors({});
  }

  return (
    <main className="container section">
      <p className="eyebrow">WE ARE HERE TO HELP</p>
      <h1>Let's talk about your project.</h1>
      <p className="muted">
        Ask us about tile designs, availability or a quotation.
      </p>

      <div className="contact-layout">
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>✉ hello@built-tiles.example</p>
          <p>☎ +91 98765 43210</p>
          <p>⌖ Visit your local tiles showroom</p>
          <p className="muted">
            Sample contact information — replace it with your
            actual showroom details.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {submitted && (
            <p className="success">
              Your enquiry passed validation! This demo does not
              send it to a server.
            </p>
          )}

          <label htmlFor="name">Full name</label>
          <input
            ref={nameRef}
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="phone">Phone number</label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 ..."
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <label htmlFor="message">Your enquiry</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us what you need..."
          />
          {errors.message && (
            <p className="error">{errors.message}</p>
          )}

          <button className="primary-button" type="submit">
            Send enquiry →
          </button>
        </form>
      </div>
    </main>
  );
}
