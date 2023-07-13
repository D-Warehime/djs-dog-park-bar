import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import Dogs from './Dogs';
import './Profile.css'

function Profile() {
  const [dogs, setDogs] = useState([
    { id: 1, name: 'Fido', breed: 'Labrador Retriever', age: 5, isFormGood: true, timesAtPark: 10, isMonthlyMember: true, isMonthlyMemberActive: true },
    { id: 2, name: 'Rex', breed: 'German Shepherd', age: 3, isFormGood: false, timesAtPark: 2, isMonthlyMember: false, isMonthlyMemberActive: false },
    { id: 3, name: 'Spot', breed: 'Dalmatian', age: 2, isFormGood: true, timesAtPark: 6, isMonthlyMember: true, isMonthlyMemberActive: false },
  ]);

  function handleDogClick(dogId) {
    console.log(`Clicked on dog with id ${dogId}`);
  }

  return (
    <div className="profile">
      <ProfileInfo name="John Doe" email="john.doe@example.com" phone="555-555-5555" totalPasses="5" />
      <Dogs dogs={dogs} onDogClick={handleDogClick} />
    </div>
  );
}

export default Profile;
