import React from 'react';
import Greetings from './practice/Greetings';
import MyForm from './practice/MyForm';
import ReducerSample from './practice/ReducerSample';
import { Counter } from './redux/counter/Counter';
import TodoForm from './redux/todolist/components/TodoForm';
import TodoList from './redux/todolist/components/TodoList';
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

      {/* react context with typescript
      <TodosContextProvider>
        <TodoForm />
        <TodoList />
      </TodosContextProvider>
      */}
      
      {/* redux toolkit with typescript
      <Counter />
      */}

      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
