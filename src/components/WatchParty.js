// WatchParty.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import ParticipantList from './ParticipantList';

function WatchParty() {
  const { sessionId } = useParams();
  const [videoUrl, setVideoUrl] = useState('');
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    // Fetch video URL and participant list based on sessionId
    // This is a placeholder, you need to implement this based on your server API
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/watchparty/${sessionId}`);
        const data = await response.json();

        setVideoUrl(data.videoUrl);
        setParticipants(data.participants);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [sessionId]);

  return (
    <div>
      <h2>Watch Party</h2>
      <VideoPlayer videoUrl={videoUrl} />
      <ParticipantList participants={participants} />
    </div>
  );
}

export default WatchParty;
