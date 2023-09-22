// This component is the root of the application's UI. It renders a CoffeeControl component within a container div.

import React from 'react';
import CoffeeControl from './CoffeeControl';

const App = () => {
  return (
    <div className='container'>
      <CoffeeControl />
    </div>
  );
}

export default App;
