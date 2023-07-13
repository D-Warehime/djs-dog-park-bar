import React from 'react';

function DogForm() {
  return (
    <div>
      <h2>Dog Info</h2>
      <form>
        <label htmlFor="dogName">Name:</label>
        <input type="text" id="dogName" name="dogName" />

        <label htmlFor="breed">Breed:</label>
        <input type="text" id="breed" name="breed" />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" />

        <label htmlFor="weight">Weight:</label>
        <input type="number" id="weight" name="weight" />

        <label htmlFor="vetForms">Up-to-date on shots:</label>
        <input type="checkbox" id="vetForms" name="vetForms" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DogForm;
