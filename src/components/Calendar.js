import React, { useState } from 'react';
import { CalendarWrapper, EventItem, EventList, CustomCalendarWrapper ,Button,LinkEl} from '../styledComponents/CalendarStyles';
import Calendar from 'react-calendar';

const CalendarView = ({ eventsData }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  const filteredEvents = eventsData.filter(
    (event) => new Date(event.date).toDateString() === selectedDate.toDateString()
  );

  return (
    <CalendarWrapper>
      <h1>WELCOME TO EVENT MANAGEMENT APP!</h1>
      <CustomCalendarWrapper>
        <Calendar onChange={onDateChange} value={selectedDate} />
      </CustomCalendarWrapper>
      <h2>Events on {selectedDate.toDateString()}</h2>
      <EventList>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <LinkEl to={`/event/${event.id}`} key={event.id}>
              <EventItem>
                {event.title} - {new Date(event.date).toDateString()}
              </EventItem>
            </LinkEl>
          ))
        ) : (
          <p>No events for this date!</p>
        )}
      </EventList>
      <LinkEl to="/event/new">
      <Button>Add Event</Button>
      </LinkEl>
    </CalendarWrapper>
  );
};

export default CalendarView;
