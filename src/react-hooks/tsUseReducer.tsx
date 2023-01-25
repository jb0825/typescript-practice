import { useReducer } from "react";

type State = {
    value: number
};

type Action = 
    | { type: 'INCREMENT' }
    | { type: 'DECREMENT' };

function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'INCREMENT': return { value: state.value + 1 };
        case 'DECREMENT': return { value: state.value - 1 };
        default: return state;
    };
};

// custom hook
function useCounter(initialState: State) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const increment = () => dispatch({ type: 'INCREMENT' });
    const decrement = () => dispatch({ type: 'DECREMENT' });

    return {state, increment, decrement};
}

export default function UseReducerSample() {
    const {state, increment, decrement} = useCounter({ value: 0 });

    return (
        <div>
            <h2>TypeScript useReducer</h2>
            <p>{state.value}</p>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    )

}