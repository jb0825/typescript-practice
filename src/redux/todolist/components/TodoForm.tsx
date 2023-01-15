import React, { FormEvent, useState } from "react";
import useTodoList from "../useTodoList"

export default function TodoForm() {
    const { onCreate } = useTodoList();
    const [text, setText] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onCreate(text);
        setText('');
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input 
                name="todo" 
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button type="submit">등록</button>
        </form>
    );
}