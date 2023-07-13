import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
// import CalendarModal from "./CalendarModal";

const Calendar = ({ events }) => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [modalDate, setModalDate] = useState(null);
//   const [modalEvents, setModalEvents] = useState([]);

//   const handleCloseModal = () => {
//     setModalIsOpen(false);
//   };

//   const handleDateClick = (eventInfo) => {
//     const date = eventInfo.date;
//     const year = date.getUTCFullYear();
//     const month = date.getUTCMonth();
//     const day = date.getUTCDate();
//     const eventsForDate = events.filter((event) => {
//       const startYear = event.start.getUTCFullYear();
//       const startMonth = event.start.getUTCMonth();
//       const startDate = event.start.getUTCDate();
//       return year === startYear && month === startMonth && day === startDate;
//     });
//     setModalDate(date);
//     setModalEvents(eventsForDate);
//     setModalIsOpen(true);
//   };
  

//   const handleEventClick = (eventClickInfo) => {
//     console.log('Event clicked')
//     console.log(eventClickInfo);
//     const event = events.find((e) => e.id === eventClickInfo.event.id);
//     if (event) {
//       setModalDate(eventClickInfo.event.start);
//       setModalEvents([event]);
//       setModalIsOpen(true);
//     } else {
//       console.log('Event not found');
//     }
//   };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        // dateClick={handleDateClick}
        fixedWeekCount={4}
        weekMode={"variable"}
        // eventClick={handleEventClick}
      />
      {/* <CalendarModal
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        date={modalDate}
        events={modalEvents}
      /> */}
    </>
  );
};

export default Calendar;
