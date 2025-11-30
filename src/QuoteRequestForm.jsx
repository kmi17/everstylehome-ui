import { useQuote } from "./QuoteContext";
import { useState } from "react";

export default function QuoteRequestForm() {
  const { quoteItems, clearQuote } = useQuote();

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      customer: form,
      items: quoteItems,
    };

    await fetch("https://your-api.com/send-quote-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    clearQuote();
    alert("Quote request sent!");
  }

  return (
    <div className="container py-4">
      <h2>Request a Quote</h2>

      <form onSubmit={handleSubmit} className="mt-4">

        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            className="form-control"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Company</label>
          <input
            className="form-control"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            rows="4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>
        </div>

        <button className="btn btn-primary">Submit Quote Request</button>
      </form>
    </div>
  );
}
