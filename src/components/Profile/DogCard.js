import React from 'react';

function DogCard(props) {
  return (
    <div className="dog-card" onClick={props.onClick}>
      <div className="dog-card-image">
        <img src="https://via.placeholder.com/150" alt="Dog" />
      </div>
      <div className="dog-card-info">
        <h3>{props.name}</h3>
        <div>{props.breed}</div>
        <div>{props.age} years old</div>
        <div className="health-info">
          <label>Records up to date :</label>
          {props.isFormGood ? <span className="green-arrow">&#x2713;</span> : <span className="red-x">&#x2717;</span>}
        </div>
        {props.isMonthlyMember && <div className="monthly-member-info">
          <label>Current Monthly member: {props.isMonthlyMemberActive ? <span className="green-arrow">&#x2713;</span> : <span className="red-x">&#x2717;</span>}</label>
        </div>}
        <p>Times visited the park: {props.timesAtPark}</p>
      </div>
    </div>
  );
}

export default DogCard;
