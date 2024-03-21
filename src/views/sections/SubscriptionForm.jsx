import React, { useState } from 'react';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {

      const url = `https://kyhnet23-assignment.azurewebsites.net/api/subscribe?email=${encodeURIComponent(email)}`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmissionMessage('Subscribed successfully');
      setEmail('');
    } catch (error) {
      console.error('Error submitting form:', error.message);
      setSubmissionMessage('Failed to subscribe. Please try again later.');
    }
  };

  return (
    <div className='sub-form'>
      <form onSubmit={handleFormSubmit}>
        <div className="input-form">

          <input className='input'
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
            
            
           <button className='sub-btn' type="submit">
                    
                    Subscribe</button> 
        </div>

      </form>
      {submissionMessage && <p>{submissionMessage}</p>}
    </div>
  );
};

export default SubscriptionForm;
