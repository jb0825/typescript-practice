import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { create, remove, toggle } from "./todoSlice";

// Custom TodoList Hook
export default function useTodoList() {
    const todoList = useAppSelector((state) => state.todoList);
    const dispatch = useAppDispatch();

    const onCreate = useCallback((text: string) => dispatch(create(text)), [dispatch]);
    const onRemove = useCallback((id: number) => dispatch(remove(id)), [dispatch]);
    const onToggle = useCallback((id: number) => dispatch(toggle(id)), [dispatch]);

    return {
        todoList,
        onCreate,
        onRemove,
        onToggle
    };
}