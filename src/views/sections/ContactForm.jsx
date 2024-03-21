import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [specialist, setSpecialist] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState('');
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://kyhnet23-assignment.azurewebsites.net/api/book-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          specialist,
          date,
          time,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }


      setSubmissionMessage('Appointment booked successfully');

      setFullName('');
      setEmail('');
      setSpecialist('');
      setDate(null);
      setTime('');
    } catch (error) {

      console.error('Error submitting form:', error.message);
      setSubmissionMessage('Failed to book appointment');
    }
  };

  return (
    <div id='contactform'>
      <div className='container-form'>
        <div className='content-form'>

          <div className='title'>
            <h1>Get Online Consultation</h1>
          </div>

          <form id='form-grid' onSubmit={handleFormSubmit}>
            <div className="form-group-name">
              <label htmlFor="full-name">Full Name:</label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="form-group-email">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group-specialist">
              <label htmlFor="specialist">Specialist:</label>
              <select
                id="specialist"
                name="specialist"
                value={specialist}
                onChange={(e) => setSpecialist(e.target.value)}
                required
              >
                <option value="">Select Specialist</option>
                <option value="Banker">Banker</option>
                <option value="Broker">Broker</option>
                <option value="Rich Guy">Rich Guy</option>
                <option value="Chill Guy">Chill Guy</option>
              </select>
            </div>


            <div className='form-group-date-time'>
              <div className="form-group-date">
                <label htmlFor="date">Date:</label>
                <DatePicker
                  id="date"
                  selected={date}
                  onChange={setDate}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Select a date"
                  required
                />
              </div>
              <div className="form-group-time">
                <label htmlFor="time">Time:</label>
                <select
                  id="time"
                  name="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                >
                  <option value="">Select Time</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
              </div>
            </div>

            <div className='submit-btn'><button id='submit-button' type="submit">Make an Appointment</button></div>
          </form>

          {submissionMessage && <p>{submissionMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
