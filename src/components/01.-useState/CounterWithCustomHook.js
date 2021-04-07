import React from 'react'
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {

    const {state, increment, reset, decrement} = useCounter(1);

    return (
        <>
           <h1>Counter with Hook: { state }</h1> 
           <hr />
           <button  onClick={ () => increment(1) } className="btn btn-success mx-2">+ 1</button>
           <button  onClick={ reset } className="btn btn-danger mx-2">Reset</button>
           <button  onClick={ () => decrement(1) } className="btn btn-warning">- 1</button>
        </>
    )
}
