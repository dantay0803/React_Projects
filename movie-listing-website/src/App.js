import React from 'react';
import Navigationbar from './Components/Navigationbar';
import PickOfTheWeek from './Components/PickOfTheWeek';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navigationbar />
      <PickOfTheWeek />
    </div>
  );
}

export default App;
