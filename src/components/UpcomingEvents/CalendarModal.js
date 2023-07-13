import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CalendarModal = ({ isOpen, date, events, handleCloseModal }) => {
  const closeModal = () => {
    handleCloseModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Calendar Modal"
      className="calendar-modal"
      overlayClassName="calendar-modal-overlay"
    >
      <div className="calendar-modal-header">
        {date && <h2>{date.toLocaleDateString()}</h2>}
        <button onClick={closeModal}>x</button>
      </div>
      {events.length === 0 ? (
        <div>No events scheduled for this day</div>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.id}>{event.title}</li>
          ))}
        </ul>
      )}
    </Modal>
  );
};

export default CalendarModal;
