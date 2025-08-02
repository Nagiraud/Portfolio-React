import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation simple
    setNameError(!name);
    setEmailError(!email);
    setMessageError(!message);

    if (!name || !email || !message) return;

    // Encodage des données pour Netlify Forms
    const formData = new URLSearchParams();
    formData.append('form-name', 'contact');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Envoi à Netlify
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    })
      .then(() => alert('Message sent successfully!'))
      .catch((error) => alert(`Error: ${error}`));
  };

  return (
    <Box
      component="form"
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className='contact-form'
    >
      {/* Champ caché requis par Netlify */}
      <input type="hidden" name="form-name" value="contact" />

      <div className='form-flex'>
        <TextField
          required
          id="name"
          name="name"
          label="Your Name"
          placeholder="What's your name?"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={nameError}
          helperText={nameError ? "Please enter your name" : ""}
        />
        <TextField
          required
          id="email"
          name="email"
          label="Email / Phone"
          placeholder="How can I reach you?"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
          helperText={emailError ? "Please enter your email or phone number" : ""}
        />
      </div>
      
      <TextField
        required
        id="message"
        name="message"
        label="Message"
        placeholder="Send me any inquiries or questions"
        multiline
        rows={10}
        className="body-form"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        error={messageError}
        helperText={messageError ? "Please enter the message" : ""}
      />
      
      <Button 
        type="submit" 
        variant="contained" 
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </Box>
  );
};

export default ContactForm;