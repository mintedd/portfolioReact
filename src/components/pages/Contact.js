
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import React, { useState, useRef } from 'react';


function Contact() {
  const form = useRef();

  const [done, setDone] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current.checkValidity()) {
      // If form is invalid, set the validation errors for each field
      setNameError(form.current.user_name.validity.valueMissing);
      setEmailError(form.current.user_email.validity.valueMissing || form.current.user_email.validity.typeMismatch);
      setMessageError(form.current.message.validity.valueMissing);
      return;
    }

    emailjs.sendForm('service_v5g9pzq', 'template_dtf59g6', form.current, '1gWbm3SKfr_vcTr1n')
      .then((result) => {
        console.log(result.text);
        setDone(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
          <div class="form-group">
      <div>
        <h2>Get in Touch with Me</h2>
      </div>

      <div>
        {done ? (
          <div>
            <p>Thanks for reaching out!</p>
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail} noValidate>
            <input
              type='text'
              name='user_name'
              className='user'
              placeholder='Name'
              required
              onInvalid={() => setNameError(true)}
              onBlur={() => setNameError(false)}
            />
            {nameError && <div>Please enter your name.</div>}
            <input
              type='email'
              name='user_email'
              className='user'
              placeholder='Email'
              required
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
              onInvalid={() => setEmailError(true)}
              onBlur={() => setEmailError(false)}
            />
            {emailError && (
              <div>
                Please enter a valid email address.
              </div>
            )}
            <textarea
              name='message'
              className='user'
              placeholder='Message'
              required
              onInvalid={() => setMessageError(true)}
              onBlur={() => setMessageError(false)}
            />
            {messageError && (
              <div>Please enter a message.</div>
            )}
            <input
              type='submit'
              value='Send'
              className='button contact-button'
            />
          </form>
        )}
      </div>
    </div>
    
    </div>



  );
}

export default Contact;