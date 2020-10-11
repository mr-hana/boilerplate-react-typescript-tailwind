import React from 'react';
import TextField from 'components/TextField';
import Button from 'components/Button';

function App() {
  return (
    <div className="p-10">
      <div>
        boilerplate-react-typescript-tailwind
      </div>
      <div className="flex flex-col">
        <div className="mt-2">
          <TextField value="abc" />
        </div>
        <div className="mt-2">
          <Button>Send</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
