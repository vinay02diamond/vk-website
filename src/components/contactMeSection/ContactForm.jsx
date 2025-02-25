import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
/*************  ✨ Codeium Command ⭐  *************/
  /**
   * Updates the state of name variable
   * @param {React.ChangeEvent<HTMLInputElement>} e - Event triggered when value of input field is changed
/******  3b788672-781e-4a08-ac0b-99ec2dabfe80  *******/  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rwaea6a",  // Replace with your actual service ID
        "template_7z718e5", // Replace with your actual template ID
        form.current,
        "gFAmy_ieo0YHzdiT8" // Replace with your public key
      )
      .then(
        () => { 
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent Successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  
  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          type="text"
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className=" rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
