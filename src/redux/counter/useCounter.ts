import { useCallback } from "react";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "../store";

// Custom counter Hook
export default function useCounter() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    // useCallback: [dispatch] 가 바뀌지 않으면 함수를 새로 만들지 않고 재사용함.
    const onIncrement = useCallback(() => dispatch(increment()), [dispatch]);
    const onDecrement = useCallback(() => dispatch(decrement()), [dispatch]);
    const onIncrementBy = useCallback(
        (amount: number) => dispatch(incrementByAmount(amount)),
        [dispatch]
    );

    return {
        count,
        onIncrement, 
        onDecrement,
        onIncrementBy
    }
}