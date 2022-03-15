/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 5000);
  return (
    <div>
      <h1>
        son las...
        {time}
      </h1>
    </div>
  );
}

export default Clock;
