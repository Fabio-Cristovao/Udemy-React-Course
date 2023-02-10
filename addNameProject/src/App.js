import React, { useState } from 'react';
import { Card } from './components/UI/Card';
import { Overlay } from './components/UI/Overlay';
import { AddUser } from './components/Users/AddUser';
import { UsersList } from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  }

  const handleAddUser = (enteredName, enteredAge) => {
    setUsers(prevUsers => {
      return [...prevUsers, { name: enteredName, age: enteredAge, id: Math.random().toString() }]
    })
  }
  return (
    <div className='app-container'>
      <button onClick={toggleOverlay}>Open</button>
      <Overlay isOpen={isOpen} onClose={toggleOverlay}>
        <h2>Teste</h2>
      </Overlay>
      <Card>
        <AddUser onAddUser={handleAddUser} />
        <UsersList users={users} />
      </Card>
    </div >
  );
}

export default App;
