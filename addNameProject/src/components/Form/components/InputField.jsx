import React from 'react';
import "./InputField.css";

export const InputFields = () => {

  return (
    <>
      <div className='input-field'>
        <label htmlFor="name" >Name:</label>
        <input type="text" placeholder="Ex: John Doe"/>
      </div>
      <div className="input-field">
        <label htmlFor="name" >Age:</label>
        <input type="text" placeholder="Ex: 20" />
      </div>
    </>
  )
}