import React, { useState } from 'react'
import { ButtonBoard } from './ButtonBoard';

const KEYS = [7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "x", "RESET", "="];


export const Keys = ({ calculation }) => {


    const onClick = (item) => {
        calculation(item);
    };

    return (
        <div className="keys_board">
            {
                KEYS.map((item) => (
                    <ButtonBoard key={item} item={item} onclick={() => onClick(item)} />
                ))
            }
        </div>
    );
};
