import React, { useState } from "react";
import "./contact.css";
import photoContact from "../../assets/contactPhoto.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "@mui/material/TextField";

import validateBetaInfo from "./validate";

const Contact = () => {
  const notify = () => toast("Thank you for your message!");

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const handleSubmit = () =>{
    
    const data = {
        name : name,
        email : email,
        message : message
    }
    
    const errors = validateBetaInfo(data);
    if (errors.name){
        setErrorName(errors.name)
    } else {
        setErrorName('')
    }
    if (errors.email){
        setErrorEmail(errors.email)
    } else {
        setErrorEmail('')
    }
    if (errors.message){
        setErrorMessage(errors.message)
    } else {
        setErrorMessage('')
    }
    console.log(errors)
    if(!errors.email &&!errors.message &&!errors.name){
        notify();
        setTimeout(() => {
            setEmail("");
            setName("");
            setMessage("");
        }, 3000);
    }

  }

  return (
    
    <div className="contact">
      <div
        className="left col-lg-6"
        style={{ backgroundImage: `url(${photoContact})` }}
      ></div>
      <div className="right form-container col-lg-4">
        <h2>Contact Us</h2>
        <div id="contact-form" className="gap-3 d-flex flex-column">
          <TextField
            error={errorName !== "" ? true : false}
            id="standard-error-helper-text"
            label="Name"
            value={name}
            onChange={ (e) => {
                setName(e.target.value) 
            }}
            helperText={errorName}
            required
            variant="standard"
          />
         
           <TextField
             error={errorEmail !== "" ? true : false}
            id="standard-error-helper-text"
            label="Email"
            value={email}
            required

            type="email"
            onChange={ (e) => {
                setEmail(e.target.value) 
            }}
            helperText={errorEmail}
            variant="standard"
          />
         
           <TextField
             error={errorMessage !== "" ? true : false}
            id="standard-error-helper-text"
            label="Message"
            required
            value={message}
            onChange={ (e) => {
                setMessage(e.target.value) 
            }}
            helperText={errorMessage}
            variant="standard"
          />
          <div className="btnContainer d-flex justify-content-center">
          <button className="sendBtn" onClick={handleSubmit}>
            Send Message
          </button>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
