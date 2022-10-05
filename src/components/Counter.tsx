import React, { useReducer } from 'react'

type CounterState = {
    count: number
}

type CounterAction = {
    type: string
    payload: number
}

const initialState = {count: 0}

const reducer = (state: CounterState, action:CounterAction) => {
        switch (action.type) {
            case 'increment':
                return {count: state.count + action.payload}
            case 'decrement':
                return {count: state.count - action.payload}
            default:
                return state
        }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <h3>count: {state.count}</h3>
        <button onClick={() => dispatch({type: 'increment', payload: 10})}>Up</button>
        <button onClick={() => dispatch({type: 'decrement', payload: 10})}>Down</button>
    </div>
  )
}

export default Counter
