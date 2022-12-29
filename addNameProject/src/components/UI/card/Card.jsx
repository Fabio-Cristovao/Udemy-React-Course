import React from 'react';
import { Form } from '../../Form/Form';
import "./Card.css";

export const Card = () => {
  return (
    <div className="card-container">
      <h3>Add a new Name:</h3>
      <Form />
    </div>
  )
}