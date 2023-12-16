// ParticipantList.js
import React from 'react';

function ParticipantList({ participants }) {
  return (
    <div>
      <h3>Participants</h3>
      <ul>
        {participants.map((participant) => (
          <li key={participant.id}>{participant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ParticipantList;
