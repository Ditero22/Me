import React, { useState, FC } from "react";

const WhatsAppContactForm: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // <-- Replace with YOUR WhatsApp number including country code
  const phoneNumber = "639123456789"; 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields!");
      return;
    }

    // Format the message to send
    const fullMessage = `Hello! My name is ${name}.\nEmail: ${email}\nMessage: ${message}`;

    // WhatsApp URL API
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

    // Open WhatsApp Web or App
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form className="whatsapp-contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Send via WhatsApp</button>
    </form>
  );
};

export default WhatsAppContactForm;
