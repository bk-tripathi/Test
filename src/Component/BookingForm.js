import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './BookingForm.css';

function BookingForm({ selectedMovie }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [tickets, setTickets] = useState(1);
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    const userData = {
      name,
      email,
      phone,
      tickets,
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    history.push('/');
  };

  return (
    <div className='wrapper'>
      <div className='input'>
      <h1>Booking Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input id='name' type="text" value={name} onChange={event => setName(event.target.value)} required />
        </label>
        <label>
          Email:
          <input id='Email' type="email" value={email} onChange={event => setEmail(event.target.value)} required />
        </label>
        <label>
          Phone (format: xxxx-xxx-xxx):
          <input id='Phone' type="tel"  pattern="^\d{4}-\d{3}-\d{3}$" value={phone} onChange={event => setPhone(event.target.value)} required />
        </label>
        <label>
          Ticket:
          <input id='Ticket' type="number"  value={tickets} onChange={event => setTickets(event.target.value)} required />
        </label>
        <button type='submit'>Book Ticket</button>
        </form>
        </div>
      </div>
  );
}
  
  export default BookingForm;