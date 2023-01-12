import { ChangeEvent, useState } from "react";
import useCounter from "./useCounter"

export function Counter() {
    const { count, onIncrement, onDecrement, onIncrementBy } = useCounter();
    const [amount, setAmount] = useState(5);

    const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.valueAsNumber
        setAmount(isNaN(value) ? 0 : value);
    }
        
    return (
        <div>
           <h1>{count}</h1> 
           <button onClick={onIncrement}>+1</button>
           <button onClick={onDecrement}>-1</button>
           <input 
            type="number"   
            name="amount" 
            onChange={handleAmountChange}
            defaultValue={amount} 
            />
           <button onClick={() => onIncrementBy(amount)}>+{amount}</button>
        </div>
    )
}