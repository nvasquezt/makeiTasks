/* eslint-disable no-alert */
/* eslint-disable react/react-in-jsx-scope */
function OnionHater() {
  const handleChange = (evt) => {
    if (evt.target.value.toLowerCase().includes('onion')) {
      alert('I hate Onion');
    }
  };
  return (
    <div>
      <h2>I hate onion exercise =D</h2>
      <textarea name="listenOnionHater" id="" cols="30" rows="10" onChange={handleChange} />
    </div>
  );
}

export default OnionHater;
