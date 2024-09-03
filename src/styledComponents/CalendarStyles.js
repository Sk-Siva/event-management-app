import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:20px;
  background-image:url('https://img.freepik.com/free-photo/flat-lay-planner-calendar-copy-space-dark-background_23-2148693339.jpg');
  background-size:cover;
  min-height:100vh;
  color:#ffffff;
  `;

export const EventList = styled.ul`
  padding: 0;
  margin: 20px 0;
`;

export const LinkEl = styled(Link)`
text-decoration:none;
color:#000000;
`

export const EventItem = styled.li`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:#66d9ff;
  border:1px solid black;
  border-radius:5px;
  padding:10px;
  color:#000000;
`;

export const DeleteButton = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
`;

export const CustomCalendarWrapper = styled.div`
  padding:50px;
  .react-calendar {
    border: none;
    background: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .react-calendar__tile {
    border-radius: 8px;
    padding: 10px;
    transition: background 0.3s;
  }

  .react-calendar__tile--active {
    background: #007bff;
    color: white;
    border-radius: 8px;
  }

  .react-calendar__tile--hover {
    background: #e9ecef;
  }

  .react-calendar__month-view__days__day {
    font-size: 16px;
  }

  .react-calendar__month-view__weekdays__weekday {
    font-weight: bold;
    color: #495057;
  }
`;
export const Button = styled.button`
background-color:#47d147;
color:#ffffff;
border-width:0px;
border-radius:10px;
padding:10px;
`