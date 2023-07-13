import React from 'react';
import DogCard from './DogCard';

function Dogs(props) {
  const dogCards = props.dogs.map(dog => (
    <DogCard
      key={dog.id}
      name={dog.name}
      breed={dog.breed}
      age={dog.age}
      isFormGood={dog.isFormGood}
      timesAtPark={dog.timesAtPark}
      isMonthlyMember={dog.isMonthlyMember}
      isMonthlyMemberActive={dog.isMonthlyMemberActive}
      onClick={() => props.onDogClick(dog.id)}
    />
  ));

  return (
    <div className="dogs">
      {dogCards}
    </div>
  );
}

export default Dogs;
