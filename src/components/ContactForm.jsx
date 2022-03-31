import React, { useState, useRef } from 'react'

const ContactForm = () => {
  const formRef = useRef();
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
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 mx-auto w-full max-w-prose">
      <div className='block'>
        <label htmlFor="name" className='text-md font-semibold mt-4'>Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className='text-black rounded-lg p-2 w-full'
          required
        />
      </div>
      <div className='block'>
        <label htmlFor="email" className='text-md font-semibold mt-4'>Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          className='text-black rounded-lg p-2 w-full'
          required
        />
      </div>
      <div className='block'>
        <label htmlFor="message" className='text-md font-semibold mt-4'>Message</label>
        <textarea
          name="message"
          id="message"
          rows="6"
          className='text-black rounded-lg p-2 w-full'
          required
        ></textarea>
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
      { 
          isSent ? // Has the message been sent?
          <p className='text-md italic max-w-[70%]'>Thanks! I'll get back to you soon.</p> : // If true, display this message
          <p></p> // If false, display nothing
        }
        <button 
          type="submit"
          className='bg-yellow-300 hover:bg-yellow-200 text-black text-md ml-auto px-4 py-2 rounded-lg font-semibold'  
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default ContactForm