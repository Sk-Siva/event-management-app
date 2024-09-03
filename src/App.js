// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CalendarView from './components/Calendar';
import EventForm from './components/EventForm';
import EventDetails from './components/EventDetails';

import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  state = {
    events: [
      { id: uuidv4(), title: 'Meeting with Bob', date: '2024-09-05', description: 'Discuss the new project.' },
      { id: uuidv4(), title: 'Dentist Appointment', date: '2024-09-05', description: 'Routine check-up.' },
      { id: uuidv4(), title: 'Lunch with Sarah', date: '2024-09-06', description: 'Catch up over lunch.' },
    ],
  };

  handleAddEvent = (newEvent) => {
    this.setState((prevState) => ({
      events: [...prevState.events, newEvent],
    }));
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      events: prevState.events.filter(event => event.id !== id),
    }));
  };

  handleEdit = (updatedEvent) => {
    this.setState((prevState) => ({
      events: prevState.events.map(event =>
        event.id === updatedEvent.id ? updatedEvent : event
      ),
    }));
  };

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<CalendarView eventsData={this.state.events} onAddEvent={this.handleAddEvent} />} />
          <Route path="/event/new" element={<EventForm onAddEvent={this.handleAddEvent} />} />
          <Route 
            path="/event/:id" 
            element={
              <EventDetails 
                events={this.state.events} 
                onDelete={this.handleDelete} 
                onEdit={this.handleEdit} 
              />
            } 
          />
        </Routes>
      </Router>
    );
  }
}

export default App;