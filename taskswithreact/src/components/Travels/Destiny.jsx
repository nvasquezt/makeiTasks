/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-alert */
import { useState } from 'react';

const data = [
  { value: 'miami', label: 'Miami' },
  { value: 'roma', label: 'Roma' },
  { value: 'paris', label: 'Paris' },
  { value: 'bogota', label: 'Bogota' },
  { value: 'madrid', label: 'Madrid' },
  { value: 'londres', label: 'Londres' },
];
function Destiny() {
  const [destiny, setDestiny] = useState('roma');
  const [count, setCount] = useState(0);

  const handleCountMore = () => {
    if (count === 12) {
      alert("mk no maaas :'(");
    } else {
      setCount(count + 1);
    }
  };
  const handleCountLess = () => {
    setCount(count - 1);
  };
  const handleCountReset = () => {
    setCount(0);
  };

  const handleChange = (evt) => {
    setDestiny(evt.target.value);
    if (evt.target.value) {
      alert(`Tu destino es viajar a ${evt.target.value}`);
    }
  };
  return (
    <div>
      <select name="cities" onChange={handleChange}>
        <option value="">Select an option</option>
        {
                data.map((item) => (
                  <option key={item.value} value={item.label}>{item.label}</option>
                ))
                }
      </select>
      <h1>
        Tu destino de viaje es
        {' '}
        {destiny}
      </h1>
      <div>
        <h1>
          Contador está en:
          {' '}
          {count}
        </h1>
        <button type="button" onClick={handleCountMore}>++</button>
        <button type="button" onClick={handleCountLess}>--</button>
        <button type="button" onClick={handleCountReset}>Reset</button>
      </div>
    </div>
  );
}

export default Destiny;
