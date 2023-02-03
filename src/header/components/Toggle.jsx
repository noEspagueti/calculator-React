import React, { memo, useEffect } from 'react';

export const Toggle = memo(({ item, array = []}) => {


    const paintToggle = () => {
        document.documentElement.className = item;
        array.filter((value) => {
            document.getElementById(value).style.opacity = "1";
            localStorage.setItem('theme', value);
            if (value !== item) {
                document.getElementById(value).style.opacity = "0";
            }
        });
    }



    useEffect(() => {
        let toggleClicked = document.getElementById(item);
        toggleClicked.addEventListener('click', paintToggle);
        return () => {
            toggleClicked.removeEventListener('click', paintToggle);
        }
    }, [item]);


    return (
        <>
            <input
                style={{ opacity: item === "theme1" ?"1":"0"}}
                className={item}
                type="radio"
                id={item}
            />
        </>
    );
});
