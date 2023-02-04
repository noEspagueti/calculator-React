/*
*  Autor: Miguel Angelo Silva Gómez
*  GitHub: https://github.com/noEspagueti
*

*  ==============================
*  | Notación infija a postfija | 
*  ==============================
*
*  INTRODUCCIÓN
*  Para la funcionalidad de esta aplicación, es necesario expresar los valores de entradas en operaciones aritméticas
*  sin ambigüedades. Si bien es cierto, la notación postfija ayudará al usuario calcular de forma correcta, respetando
*  las prioridades de las operaciones sin ningún tipo de error, garantizando la eficiencia del algoritmo.
*
*
*  Fuentes:
*  
*
*
*/

import { Stack } from './Stack.js';


export const exprePostFija = function () {

    const OPERATORS_PRIORITY = [
        { op: "^", valueOutStack: 4, valueInStack: 3 },
        { op: "x", valueOutStack: 2, valueInStack: 2 },
        { op: "/", valueOutStack: 2, valueInStack: 2 },
        { op: "+", valueOutStack: 1, valueInStack: 1 },
        { op: "-", valueOutStack: 1, valueInStack: 1 },
        { op: "(", valueOutStack: 5, valueInStack: 0 },
        { op: ")", valueOutStack: -1, valueInStack: -1 }
    ];



    this.evaluate = function (posfija) {
        let newStack = new Stack();
        for (let i = 0; i < posfija.length; i++) {
            let letter = posfija.charAt(i);
            if (!this.isOperator(letter)) {
                let number = parseFloat(letter);
                newStack.push(number);
            } else {
                let operan2 = parseFloat(newStack.pop());
                let operan1 = parseFloat(newStack.pop());
                let result = this.operation(letter, operan1, operan2);
                newStack.push(result);
            }
        }
        return newStack.topElement();
    };

    this.convertToPostFija = function (infija) {
        let postFija = "";
        let stack = new Stack();
        let aux = infija.trim();
        for (let i = 0; i < aux.length; i++) {
            let temp = aux.charAt(i);
            if (this.isOperator(temp)) {
                if (stack.emptyList()) {
                    stack.push(temp);
                } else {
                    let priorityOutStack = this.priorityOutStack(temp);
                    let priorityInStack = this.priorityInStack(stack.topElement());
                    if (priorityOutStack > priorityInStack) {
                        stack.push(temp);
                    } else {
                        if (temp === ')') {
                            while (stack.topElement() !== '(') {
                                postFija += stack.pop();
                            }
                            stack.pop();
                        } else {
                            postFija += stack.pop();
                            stack.push(temp);
                        }
                    }
                }
            } else {
                postFija += temp;
            }
        }

        while (!stack.emptyList()) {
            postFija += stack.pop();
        }

        return postFija.replace("(", "").replace(")", "");
    };




    this.isOperator = function (operator) {
        return ["x", "^", "+", "-", "/" + "(" + ")"].includes(operator);
    };

    this.priorityOutStack = function (operator) {
        const value = OPERATORS_PRIORITY.filter(item => item.op === operator);
        return value[0].valueOutStack;
    };

    this.priorityInStack = function (operator) {
        const value = OPERATORS_PRIORITY.filter(item => item.op === operator);
        return value[0].valueInStack;
    };

    this.operation = function (operator, operand1, operand2) {
        if (operator === "x") { return operand1 * operand2 };
        if (operator === "/") { return operand1 / operand2 };
        if (operator === "^") { return Math.pow(operand1, operand2) };
        if (operator === "+") { return operand1 + operand2 };
        if (operator === "-") { return operand1 - operand2 };
    };

};



