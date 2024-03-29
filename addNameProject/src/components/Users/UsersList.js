import React from 'react';
import { Card } from '../UI/Card';
export const UsersList = (props) => {
  return (
    <Card>
      <ul>
        {props.users.map(user =>
          <li key={user.id}>
            {user.name}, ({user.age} years old)
          </li>
        )}
      </ul>
    </Card>
  )
}