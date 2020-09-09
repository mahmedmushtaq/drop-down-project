import React from 'react';
import DropDown from './drop-down';
import { options, linkedOptions } from './dummy-data';

function App() {
  return (
    <div>
      <DropDown options={options} linkedOptions={linkedOptions} />
    </div>
  );
}

export default App;
