import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./features/Users";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <div className="App">
      <div className="addUser">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name..."
        />
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username..."
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          Add user
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div>
              <h1>{user.name}</h1>
              <h1>{user.username}</h1>
              <input
                type="text"
                placeholder="New username..."
                onChange={(e) => setNewUsername(e.target.value)}
              />
              <button
                onClick={() =>
                  dispatch(
                    updateUsername({ id: user.id, username: newUsername })
                  )
                }
              >
                Update Username
              </button>
              <button onClick={() => dispatch(deleteUser({ id: user.id }))}>
                Delete user
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
