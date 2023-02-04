import React, { useState, useEffect, useRef } from 'react'
import { exprePostFija } from '../helpers/caltulation';

export const Input = () => {
    const [input, setinput] = useState("");

    const inputRef = useRef(null);

    const onChangeInput = (event) => {
        setinput(event.target.value);
    };


    const calculation = (e) => {
        if (e.key !== "Enter") return
        inputRef.current.focus();
        let pos = new exprePostFija();
        let postFija = pos.convertToPostFija(input);
        let value = pos.evaluate(postFija);
        setinput(value);
    }


    useEffect(() => {
        document.addEventListener('keydown', calculation)
        return () => {
            document.removeEventListener('keydown', calculation);
        }
    }, [input])


    return (
        <section className='input__screen'>
            <input
                className='inputScreen'
                ref={inputRef}
                type="text"
                value={input}
                onChange={onChangeInput}
            />
        </section>
    );
};
