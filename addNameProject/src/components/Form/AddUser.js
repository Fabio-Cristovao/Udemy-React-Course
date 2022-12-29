import { React, useState } from 'react';
import { Button } from '../UI/button/Button';

export const AddUser = (props) => {

  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const handleNameInputChange = (event) => {
    setNameInput(event.target.value);
  }
  const handleAgeInputChange = (event) => {
    setAgeInput(event.target.value);
  }

  const handleAddUser = (event) => {
    event.preventDefault();

    // add some logic to validade the input fields

    console.log(nameInput, ageInput);
    setNameInput("");
    setAgeInput("");
  }
  return (
    <form onSubmit={handleAddUser}>
      <label htmlFor='username'>UserName</label>
      <input id='username' type="text" onChange={handleNameInputChange} value={nameInput} />
      <label htmlFor='age'>Age</label>
      <input id='age' type="number" onChange={handleAgeInputChange} value={ageInput} />
      <Button type='submit'>Add User</Button>
    </form>
  )
}