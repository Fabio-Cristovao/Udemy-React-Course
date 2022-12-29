import React from 'react';
import { Button } from '../UI/button/Button';
import { InputFields } from './components/InputField';

export const Form = () => {

  // const handleSubmit = () => { };
  return (
    <>
      <form>
        <InputFields />
        <div style={{display: "flex", justifyContent: "center"}}>
          <Button />
        </div>
      </form>
    </>
  )
}