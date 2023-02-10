import React, { useState } from 'react';
import { Button } from '../UI/Button';
import './AddUser.css';

export const AddUser = props => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const onChangeNameHandler = (event) => {
    setName(event.target.value);
  };
  const onChangeAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      return;
    }

    if (+age < 1) {
      return;
    }

    props.onAddUser(name, age);
    console.log(name, age);
    setName('');
    setAge('');
  };

  return (
    < form onSubmit={handleOnSubmit} >
      <div className='form-field'>
        <label htmlFor='name'>Name</label>
        <input id='name' type='text' value={name} onChange={onChangeNameHandler}></input>
      </div>
      <div className='form-field'>
        <label htmlFor='age'>Age</label>
        <input id='age' type='number' value={age} onChange={onChangeAgeHandler}></input>
      </div>
      <div className='form-field-button'>
        <Button>Add User</Button>
      </div>
    </form >
  )
}