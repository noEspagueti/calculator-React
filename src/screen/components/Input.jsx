import React, { useState, useEffect } from 'react'
import { Board } from '../Board'
import { calculateExpretion } from '../helpers/calculate';

export const Input = () => {

    const [input, setinput] = useState([]);

    const onChangeInput = (event) => {
        setinput(event.target.value);
    };

    const captureBoard = (item) => {
        "DEL" === item ? setinput(input.slice(0, -1))
            : "RESET" === item ? setinput([])
                : "=" === item ? setinput(input.slice(0, input.length))
                    : setinput([...input, item]);

        if (item === "=") {
            console.log(input);
            let result = calculateExpretion(input);
            setinput([result])
        }
    };

    return (
        <>
            <section className='__screen'>
                <section className='input__screen'>
                    {/* <input
                        className='inputScreen'
                        type="text"
                        value={input.join("")}
                        onChange={onChangeInput}
                    /> */}
                    <p>{
                        input.join("")
                    
                    }</p>
                </section>
            </section>
            <Board calculation={captureBoard} />
        </>

    );
};
