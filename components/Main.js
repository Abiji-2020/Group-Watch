function Main({ user, joinRoomHandler, createRoomHandler }) {
    return (
      <div className="main">
        {!user.roomId && (
          <div className="room-selection">
            <h2>Join a Room</h2>
            <input type="text" placeholder="Room ID" />
            <button onClick={joinRoomHandler}>Join</button>
            <h2>Create a Room</h2>
            <button onClick={createRoomHandler}>Create</button>
          </div>
        )}
        {user.roomId && (
          // Render room information and other functionalities after joining
        )}
      </div>
    );
  }
  
  export default Main;
  