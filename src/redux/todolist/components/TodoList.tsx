import useTodoList from "../useTodoList"

export default function TodoList() {
    const { todoList } = useTodoList();

    return (
        <ul>{
            todoList.map(todo => 
                <li key={todo.id}>{todo.text}</li>
            )
        }</ul>
    );
}