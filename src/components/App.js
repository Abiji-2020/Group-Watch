// App.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [name, setName] = useState('');
  const [watchpartyUrl, setWatchpartyUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleNameChange = (event) => setName(event.target.value);

  const createWatchparty = () => {
    setLoading(true);

    // Replace this fetch with your actual backend API endpoint
    fetch('/api/create-watchparty', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          const newWatchpartyUrl = `/watchparty/${data.sessionId}`;
          setWatchpartyUrl(newWatchpartyUrl);
          console.log('Watchparty created! Share the URL with others to join:', newWatchpartyUrl);
          navigate(newWatchpartyUrl); // Navigate to the watch party page
        }
      })
      .catch((error) => {
        console.error(error);
        setError('An error occurred. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      alert('Please enter your name.');
      return;
    }

    createWatchparty();
  };

  return (
    <div className="App">
      <h1>Watchparty</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name:</label>
        <input
          type="text"
          id="name"
          placeholder="Your name"
          value={name}
          onChange={handleNameChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Creating Watchparty...' : 'Join Watchparty!'}
        </button>
      </form>
      {watchpartyUrl && (
        <div>
          <p>Watchparty URL:</p>
          <input type="text" value={watchpartyUrl} readOnly />
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
