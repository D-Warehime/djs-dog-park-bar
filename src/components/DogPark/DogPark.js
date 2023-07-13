import React from "react";
import "./DogPark.css";
// import dogParkImage1 from "../../assets/dog-park-1.jpg";
// import dogParkImage2 from "../../assets/dog-park-2.jpg";
// import dogParkImage3 from "../../assets/dog-park-3.jpg";

function DogPark() {
  return (
    <div className="dog-park-container">
      <h2>Welcome to the Dog Park!</h2>
      <p>
        Our dog park features a large fenced-in area with wood fiber flooring that's gentle on your pup's paws. Your furry friend can run, play, and socialize with other dogs while you watch from our shaded seating area.
      </p>
      <img src='https://www.weekendnotes.com/im/008/01/enclosed-dog-parks-dog-agility-playground-where-to1.JPG' alt="Dog park" className="dog-park-image" />
      <p>
        We have multiple water stations throughout the park to ensure your dog stays hydrated while having fun. Our dog park rangers are also on hand to make sure all dogs play nicely and safely.
      </p>
      <img src='https://www.al.com/resizer/R5i9jom-ifz0pfOht2gXH49ofEo=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/P2YX4OB7CNBY5J6UENK5LBXCZE.jpg' alt="Dog park" className="dog-park-image" />
      <p>
        In addition to our wood fiber flooring and water stations, we also have classic dog park structures and amenities like agility equipment and dog toys. We're constantly looking for ways to improve and expand our dog park to make it an even more enjoyable experience for you and your furry friend.
      </p>
      <img src='https://www.thestar.com/content/dam/thestar/life/2017/02/18/taking-your-puppy-to-the-dog-park-be-a-positive-experience-pet-lovers-manual/pets.jpg' alt="Dog park" className="dog-park-image" />
    </div>
  );
}

export default DogPark;
