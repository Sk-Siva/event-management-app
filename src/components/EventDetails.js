// src/components/EventDetails.js
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DetailsWrapper ,Event,Button,BtnContainer} from '../styledComponents/EventDetailsStyles';

function EventDetails({ events, onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find((event) => event.id === id);

  if (!event) {
    return <p>Event not found</p>;
  }

  const handleDelete = () => {
    onDelete(id);
    navigate('/');
  };

  return (
    <DetailsWrapper>
      <Event><h2>{event.title.toUpperCase()}</h2>
      <p>{event.description}</p>
      <p>{event.date}</p>
      <BtnContainer>
      <Button color={"red"} onClick={handleDelete}>Delete</Button>
      <Button onClick={() => navigate('/')}>Back</Button>
      </BtnContainer>
      </Event>
    </DetailsWrapper>
  );
}

export default EventDetails;
