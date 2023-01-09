import React from 'react';
import { Todo } from "../modules/todos";
import TodoItem from "./TodoItem";

// 리덕스 스토어가 지니고 있는 상태의 todos 배열 조회할 투두 리스트
function TodoList() {
    const todos: Todo[] = [];

    if (todos.length === 0) return <p>등록된 항목이 없습니다.</p>;

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </ul>
    );
};

export default TodoList;