import React, { useState } from 'react';
import Calendar from "./Calendar";
import './Events.css';

function Events() {
  const [view, setView] = useState('cards'); // default view is cards
  // const [modalDate, setModalDate] = useState(null);
  // const [modalEvents, setModalEvents] = useState([]);
  // const [modalIsOpen, setModalIsOpen] = useState(false);


  const handleViewChange = (view) => {
    setView(view);
  }

  // const handleDateClick = (date, events) => {
  //   const formattedDate = date.toISOString().substring(0, 10);
  //   const eventsForDate = events.filter((event) => event.date === formattedDate);
  //   setModalDate(date);
  //   setModalEvents(eventsForDate);
  //   setModalIsOpen(true);
  // };
  

  const renderHeaderButtons = () => {
    return (
      <div className="header-buttons">
        <button className={view === 'cards' ? 'selected' : ''} onClick={() => handleViewChange('cards')}>
          <i className="fa fa-bars"></i>
        </button>
        <button className={view === 'calendar' ? 'selected' : ''} onClick={() => handleViewChange('calendar')}>
          <i className="fa fa-calendar"></i>
        </button>
      </div>
    );
  }

  const eventsData = [
    {
      title: 'Live Music at the Park',
      date: 'May 14, 2023',
      location: 'Central Park',
      time: '3:00 PM - 7:00 PM',
      description: 'Join us for a free concert at the park with local artists.',
    },
    {
      title: 'Outdoor Movie Night',
      date: 'June 3, 2023',
      location: 'City Hall',
      time: '7:00 PM - 10:00 PM',
      description: 'Bring your blankets and chairs for a night of movie under the stars.',
    }, 
    {
      title: 'Bark in the Park',
      location: 'Central Park',
      date: 'May 15, 2023',
      time: '1:00 PM - 4:00 PM',
      description: 'Join us for a fun afternoon of games and activities with your furry friends!',
    },
    {
      title: 'Pups and Pints',
      location: 'Brewery District',
      date: 'June 5, 2023',
      time: '3:00 PM - 6:00 PM',
      description: 'Bring your pup to the brewery for a day of brews and fun activities!',
    },
    {
      title: 'Yappy Hour',
      location: 'Dog Park',
      date: 'June 19, 2023',
      time: '5:00 PM - 7:00 PM',
      description: 'Bring your pup for a fun evening at the dog park with drinks and snacks!',
    }
  ];

  const sortedEvents = eventsData.sort((a, b) => new Date(a.date) - new Date(b.date));

  const renderEventsCards = () => {
    return (
      <div className="events-cards-container">
        {sortedEvents.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="event-card-info">
              <div className="event-card-title">{event.title}</div>
              <div className="event-card-description">{event.description}</div>
              <div className="event-card-date">{event.date}</div>
              <div className="event-card-time">{event.time}</div>
              <div className="event-card-location">{event.location}</div>
            </div>
            <div className="event-card-image">
              {/* add image here */}
            </div>
          </div>
        ))}
      </div>
    );
  }

  const renderEventCalendarContent = () => {
    return sortedEvents.map((event, index) => ({
      id: index,
      title: event.title,
      start: new Date(event.date + ' ' + event.time.split(' - ')[0]),
      end: new Date(event.date + ' ' + event.time.split(' - ')[1]),
      description: event.description
    }));
  };

  return (
    <div className="events-container">
      <h1 className="events-header">Upcoming Events</h1>
      {renderHeaderButtons()}
      {view === 'cards' ? renderEventsCards() : <Calendar events={renderEventCalendarContent()} />}
      {/* dateClick={(info) => handleDateClick(info.date, sortedEvents) */}
    </div>
  );
}

export default Events;
