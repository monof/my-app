import React, { useState } from 'react';

function Counter() {
    const [numberA, setNumberA] = useState(0);
    const [numberB, setNumberB] = useState(1);
    const onChangeA = (e) => {
        setNumberA(e.target.value);
    }
    const onChangeB = (e) => {
        setNumberB(e.target.value);
    }
    const numA = Number(numberA);
    const numB = Number(numberB);
    const plus= () => {
        alert(numA  + numB );
    }
    const minus = () => {
        alert(numA  - numB );
    }
    const style = {
        padding : 50
    }
    return(
        <div style={style}>
            <div>
            <input type="nuber" name="input1" value={numberA} onChange={onChangeA}></input>
            </div>
            <div>
            <input type="nuber" name="input2" value={numberB} onChange={onChangeB}></input>
            </div>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    );
    
}

export default Counter;