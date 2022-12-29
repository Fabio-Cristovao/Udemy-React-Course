import React, { useState } from 'react';
import { Button } from './components/UI/button/Button';
import { Card } from './components/UI/card/Card';
import { AppTitle } from './components/UI/title/Title';
import "./index.css"

function App() {

  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  }

  return (
    <div className='app-container'>
      <AppTitle />
      {show ? <Card /> : <Button showForm={toggle} />}

    </div>
  );
}

export default App;
