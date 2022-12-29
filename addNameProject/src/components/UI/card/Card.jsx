import React from 'react';
import { AddUser, Form } from '../../Form/AddUser';
import "./Card.css";

export const Card = () => {
  return (
    <div className="card-container">
      <h3>Add a new Name:</h3>
      <AddUser />
    </div>
  )
}