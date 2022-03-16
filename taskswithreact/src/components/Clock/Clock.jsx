import { useState, useEffect } from 'react';

function Clock() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  console.log('mounting clockPage');

  const interval = setInterval(() => {
    setTime(new Date().toLocaleTimeString());
    console.log('estoy pintando intervalos....');
    setCount(count + 1);
  }, 5000);

  useEffect(() => () => {
    console.log('Antes de desmontar la page');
    clearInterval(interval);
  }, []);
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
