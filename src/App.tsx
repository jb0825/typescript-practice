import React from 'react';
import Greetings from './practice/Greetings';
import MyForm from './practice/MyForm';
import ReducerSample from './practice/ReducerSample';
import TodoForm from './todolist/component/TodoForm';
import TodoList from './todolist/component/TodoList';
import { TodosContextProvider } from './todolist/contexts/TodosContext';

function App() {
  const onClick = (name: string) => console.log(`${name} says hello`);
  const onSubmit = (form: { name: string, description: string }) => console.log(form);

  return (
    <div className="App">
      {/* typescript practice
      <Greetings name="Lala" onClick={onClick}/>
      <Counter />
      <MyForm onSubmit={onSubmit}/>
      <ReducerSample />
      */}

      <TodosContextProvider>
        <TodoForm />
        <TodoList />
      </TodosContextProvider>

    </div>
  );
}

export default App;
