import { useReducer } from "react";

interface CounterState {
    counter: number,
    previous: number,
    changes: number,
}

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
}

type CounterAction =
    { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset' }


const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

    const { changes, counter } = state;

    switch (action.type) {
        case "increaseBy":
            return {
                ...state,
                counter: counter + action.payload.value,
                previous: counter,
                changes: changes + 1,
            }
        case 'reset':
            return {
                counter: 0,
                previous: 0,
                changes: 0
            }
        default:
            return state;
    }
}



export const CounterReducerComponent = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleReset = () => {
        dispatch({ type: "reset" });
    }

    const increaseBy = (value: number) => {
        dispatch({ type: "increaseBy", payload: { value } })
    }

    return (
        <>
            <h1>Counter Reducer Component</h1>
            <pre>{JSON.stringify(counterState)}</pre>
            <button onClick={() => increaseBy(1)}>+1</button>
            <button onClick={() => increaseBy(5)}>+5</button>
            <button onClick={() => increaseBy(10)}>+10</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}
