import React from 'react';
import Counter from './Counter';
import Greetings from './Greetings';
import MyForm from './MyForm';

function App() {
  const onClick = (name: string) => console.log(`${name} says hello`);
  const onSubmit = (form: { name: string, description: string }) => console.log(form);

  return (
    <div className="App">
      <Greetings name="Lala" onClick={onClick}/>
      <Counter />
      <MyForm onSubmit={onSubmit}/>
    </div>
  );
}

export default App;
