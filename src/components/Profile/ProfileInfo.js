import React from 'react';

function ProfileInfo(props) {
  return (
    <div className="profile-info">
      <h2>{props.name}</h2>
      <div className="basic-info">
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <button className="edit-button">Edit Information</button>
      </div>
      <div className="passes-info">
        <p>Total Passes: {props.totalPasses}</p>
      </div>
    </div>
  );
}

export default ProfileInfo;
