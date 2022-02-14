import { useState } from 'react';
import Alert from './components/Alert';

import Food from './components/Food';
import MyComponent from './components/MyComponent';
import Wrapper from './components/Wrapper';

const food = ['Pizza', 'Hamburger', 'Coke'];

export default function App() {
  const [inputValue, setInputValue] = useState('');
  return (
    <main>
      <MyComponent />
      <Wrapper />
      <Food food={food} />
      <Alert input={setInputValue} />
      <p>{inputValue}</p>
    </main>
  );
}

//sammerbeidet med Hallvard Dahle
