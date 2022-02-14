import { useState } from 'react';

export default function Alert({ input }) {
  const afterClick = () => {
    console.log('Clicked');
    console.log({ state });
  };

  const [state, text] = useState('');

  const afterChange = (e) => {
    text(e.target.value);
    input(e.target.value);
    console.log('Change');
  };

  return (
    <div>
      <button onClick={afterClick}>Click Me</button>

      <input onChange={afterChange} value={state}></input>
    </div>
  );
}
