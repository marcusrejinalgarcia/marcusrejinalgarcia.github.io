import React, { useState, useRef } from 'react'


const ContactForm = () => {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);

    fetch('https://usebasin.com/f/aa1c16af8e06', {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData
    })
    .then((response) => {
      if (response.status === 200) {
        console.log("success");
        setIsSent(true);
      } else {
        console.log("fail");
      }
    })
    .catch((error) => console.log(error));
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className='flex flex-col'>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className='text-black'
          onChange={(e) => setName(e.target.value)}
          required

        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          className='text-black'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="message">Message<span className='text-yellow-400'>*</span></label>
        <textarea
          name="message"
          id="message"
          rows="6"
          className='text-black'
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Send Message</button>
      { isSent ? <p>Thank you! I'll get back to you soon.</p> : "" }
    </form>
  )
}

export default ContactForm