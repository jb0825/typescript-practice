import "../../../todolist/styles/TodoItem.css";
import { Todo } from "../todoSlice";
import useTodoList from "../useTodoList";

export default function TodoItem(todo: Todo) {
    const { onRemove, onToggle } = useTodoList();
    const { id, text, done } = todo;

    return (
        <li className={`TodoItem ${done ? 'done' : ''}`}>
            <span className="text" onClick={() => onToggle(id)}>{text}</span>
            <span className="delete" onClick={() => onRemove(id)}>(X)</span>
        </li>
    );
}