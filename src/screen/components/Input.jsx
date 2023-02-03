import React, { useState, useEffect, useRef } from 'react'
// import { calculateOperations } from '../helpers/caltulation';
// import { lista } from '../helpers/caltulation';

export const Input = () => {
    const [input, setinput] = useState("");

    const inputRef = useRef(null);

    const onChangeInput = (event) => {
        setinput(event.target.value);
    };


    const calculation = (e) => {
        if (e.key !== "Enter") return
        inputRef.current.focus();
    }
    
    console.log(input);

    useEffect(() => {
        document.addEventListener('keydown', calculation)
        return () => {
            document.removeEventListener('keydown', calculation);
        }
    }, [])


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
