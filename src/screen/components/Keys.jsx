import React,{useState} from 'react'
import { ButtonBoard } from './ButtonBoard';

const KEYS = [7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "x", "RESET", "="];


export const Keys = () => {

    const [operand, setOperand] = useState("");

    const onClick = ( item ) => {
            // if (typeof item === 'number') {
            //     console.log(item);
            // }
            // if (item === "+" || item === "-" || item === "x" || item === "/"){
            //     console.log(item);
            // }
            if(item==="DEL"&& item==="RESET" && item === "=")return;
            setOperand(oper => oper += item);
    };

    console.log(operand);

    return (
        <div className="keys_board">
            {
                KEYS.map((item) => (
                    <ButtonBoard key={item} item={item} onclick={()=>onClick(item)}/>
                ))
            }
        </div>
    );
};
