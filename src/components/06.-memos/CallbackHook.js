import React, { useCallback, useState } from 'react'

import { ShowIncrement } from './ShowIncrement';
import '../05.-useLayoutEffect/layout.css';

export const CallbackHook = () => {

    const [counter, setSounter] = useState(10);

    // const increment = () => {
    //     setSounter(counter + 1);
    // }

    const increment = useCallback( (num) => {
        setSounter( c => c+num );
    },[setSounter])

    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={increment} />
        </div>
    )
}
