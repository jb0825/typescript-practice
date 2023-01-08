import { Todo, useTodosDispatch } from '../contexts/TodosContext';
import "../styles/TodoItem.css";

export type TodoItemProps = {
    todo: Todo
};

function TodoItem({ todo }: TodoItemProps) {
    const dispatch = useTodosDispatch();

    const onToggle = () => {
        dispatch({
            type: 'TOGGLE',
            id: todo.id
        });
    };
    const onDelete = () => {
        if (window.confirm('할일을 삭제할까요?'))
            dispatch({
                type: 'DELETE',
                id: todo.id
            });
    };

    return (
        <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
            <span className='text' onClick={onToggle} >{todo.text}</span>
            <span className='delete' onClick={onDelete}>(X)</span>
        </li>
    );
};

export default TodoItem;