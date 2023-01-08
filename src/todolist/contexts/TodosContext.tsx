import React, { createContext, Dispatch, useContext, useReducer } from "react";

// 상태 전용 Context
export type Todo = {
    id: number;
    text: string;
    done: boolean;
};

type TodoState = Todo[];

const TodoStateContext = createContext<TodoState | undefined>(undefined);

// 액션 전용 Context
type Action = 
    | { type: 'CREATE'; text: string; }
    | { type: 'TOGGLE'; id: number; }
    | { type: 'DELETE'; id: number; };

type TodosDispatch = Dispatch<Action>;
const TodosDispatchContext = createContext<TodosDispatch | undefined>(undefined);

// Reducer
function todosReducer(state: TodoState, action: Action): TodoState {
    switch (action.type) {
        case 'CREATE':
            const nextId = Math.max(...state.map(todo => todo.id)) + 1;
            return state.concat({
                id: nextId,
                text: action.text,
                done: false
            });
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? {...todo, done: !todo.done } : todo
            );
        case 'DELETE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error('Unhandle action');
    };
};

// Provider
export function TodosContextProvider({ children }: { children: React.ReactNode }) {
    const [todos, dispatch] = useReducer(todosReducer, [
        {
            id: 1,
            text: 'Context API 배우기',
            done: true
        },
        {
            id: 2,
            text: 'TypeScript 배우기',
            done: false
        },
        {
            id: 3,
            text: 'TypeScript 와 Context API 함께 사용하기',
            done: false
        }
    ]);

    return (
        <TodosDispatchContext.Provider value={dispatch}>
            <TodoStateContext.Provider value={todos}>
                {children}
            </TodoStateContext.Provider>
        </TodosDispatchContext.Provider>
    );
};

// Custom Hooks
export function useTodoState() {
    const state = useContext(TodoStateContext);
    if (!state) throw new Error('TodosProvider not found');
    return state;
}

export function useTodosDispatch() {
    const dispatch = useContext(TodosDispatchContext);
    if (!dispatch) throw new Error('TodosProvider not found');
    return dispatch;
}