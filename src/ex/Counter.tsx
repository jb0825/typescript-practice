import React, { useReducer } from "react";

type Action = { type: "INCREASE" } | { type: "DECREASE" };

function reducer(state: number, action: Action) {
    switch (action.type) {
        case "INCREASE":
            return state + 1;
        case "DECREASE":
            return state - 1;
        default: 
            throw new Error("Unhandled action");
    }
};

function Counter() {
    /*
    const [count, setCount] = useState(0);
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1);
    */
    const [count, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => dispatch({ type: "INCREASE" });
    const onDecrease = () => dispatch({ type: "DECREASE" });

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={onIncrease}>increase</button>
            <button onClick={onDecrease}>decrease</button>
        </div>
    )
}

export default Counter;