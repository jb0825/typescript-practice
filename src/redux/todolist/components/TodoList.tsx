import useTodoList from "../useTodoList"
import TodoItem from "./TodoItem";

export default function TodoList() {
    const { todoList } = useTodoList();

    return (
        <ul>{
            todoList.map(todo => (
            <TodoItem {...todo} key={todo.id} />
            ))
        }</ul>
    );
}