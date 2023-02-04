import React, { useState, useEffect } from 'react'
import { Board } from '../Board'
import { exprePostFija } from '../helpers/caltulation';

export const Input = () => {

    const [input, setinput] = useState([]);
    const onChangeInput = (event) => {
        setinput(event.target.value);
    };
    const captureBoard = (item) => {
        "DEL" === item ? setinput(input.slice(0, -1)) : "RESET" === item ? setinput([]) : "=" === item ? setinput(input.slice(0, input.length)) : setinput([...input, item]);

        if(item === "="){
            let pos = new exprePostFija();
            let value = pos.convertToPostFija(input.join(""));
            let expretion = pos.evaluate(value);
            setinput([expretion]);
        }

    }

    return (
        <>
            <section className='__screen'>
                <section className='input__screen'>
                    <input
                        className='inputScreen'
                        type="text"
                        value={input.join("")}
                        onChange={onChangeInput}
                    />
                </section>
            </section>
            <Board calculation={captureBoard} />
        </>

    );
};
