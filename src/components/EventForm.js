import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormWrapper, Input, Button } from '../styledComponents/EventFormStyles';
import { useNavigate } from 'react-router-dom';

function EventForm({ onAddEvent }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { id: uuidv4(), title, date ,description};
    onAddEvent(newEvent);
    navigate('/');
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Event Title"
        />
        <Input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Event Description"
        />
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Button type="submit">Add Event</Button>
      </form>
    </FormWrapper>
  );
}

export default EventForm;