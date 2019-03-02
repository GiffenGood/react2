import * as React from 'react';
import { useState } from 'react';

export function Button() {
    const [count, setCount] = useState(0);

    const incr = () => setCount(count + 1);

    return (
        <button onClick={incr} className="btn btn-primary">{count}</button>
    )
}

