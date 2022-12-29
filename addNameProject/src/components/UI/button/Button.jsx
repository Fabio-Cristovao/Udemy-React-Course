import React from 'react';
import "./Button.css";

export const Button = (props) => {

  const handleOnClick = () => {
    console.log('button was clicked!')
    props.showForm();
  }
  return (
    <button className="btn" onClick={handleOnClick}>
      Add New User
    </button>
  )
}