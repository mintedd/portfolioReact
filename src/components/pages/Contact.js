
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
      <div>
        <h2>Get in Touch with Me</h2>
      </div>

      <div>
        {done ? (
          <div>
            <p>Thanks for reaching out!</p>
          </div>
        ) : (
          <form class="form-group" ref={form} onSubmit={sendEmail} noValidate>
            <div>
            <label for="exampleNameInput1">Name</label>
              <input
                type='text'
                name='user_name'
                class="form-control"
                placeholder='Name'
                required
                onInvalid={() => setNameError(true)}
                onBlur={() => setNameError(false)}
              />
              </div>
              <div>
              {nameError && <div>Please enter your name.</div>}
              <label for="exampleInputEmail1">Email address</label>
              <input
                id="exampleInputEmail1"
                type='email'
                name='user_email'
                class="form-control" placeholder='Enter Email'
                aria-describedby="emailHelp"
                required
                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                onInvalid={() => setEmailError(true)}
                onBlur={() => setEmailError(false)}
              />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            {emailError && (
              <div>
                Please enter a valid email address.
              </div>
            )}
            <textarea
              name='message'
              class="form-control"
              placeholder='Message'
              required
              onInvalid={() => setMessageError(true)}
              onBlur={() => setMessageError(false)}
            />

            {messageError && (
              <div>Please enter a message.</div>
            )}
            <div>
                          <input
              type='submit'
              value='Send Message'
              class="btn btn-primary"
            />
            </div>

          </form>
        )}
      </div>
    </div>




  );
}

export default Contact;