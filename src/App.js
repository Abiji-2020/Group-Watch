import React from 'react';
import Header from './Header';
import Main from './components/Main';
import JoinRoomModal from './components/JoinRoomModal';

const [user, setUser] = useState({ name: '', roomId: '' });
const [isOpen, setIsOpen] = useState(false);

const handleJoinRoom = (e) => {
  // ... validation and logic for joining room
  setIsOpen(false); // close modal after joining
};

const handleInputChange = (event) => {
  const { target: { name, value } } = event;
  setUser({ ...user, [name]: value });
};

function App() {
    return (
      <div className="App">
        <Header />
        {user.roomId && <Welcome user={user} />}
        {!user.roomId && (
          <Main>
            <button onClick={() => setIsOpen(true)}>Join Room</button>
            {isOpen && (
              <JoinRoomModal
                isOpen={isOpen}
                user={user}
                handleInputChange={handleInputChange}
                joinRoomHandler={handleJoinRoom}
              />
            )}
            <button>Create Room</button>
          </Main>
        )}
        <Footer />
      </div>
    );
  }
  
  export default App;
  
