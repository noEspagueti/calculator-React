export const calculateExpretion = (input = []) => {
    const OPERATORS = ["x", "/", "+", "-"];
    let operand1;
    let operand2;
    let op;

    input.map((item, index) => {
        if (OPERATORS.includes(item)) {
            operand1 = parseFloat(input.slice(0, index).join(""));
            op = input[index];
            input.splice(0, index + 1);
        } else {
            operand2 = parseFloat(input.slice(index + 2).join(""));
        }
    });

    console.log(input);
    console.log(operand1);
    console.log(op);
    console.log(operand2);

    return op === "x" ? operand1 * operand2 :
        op === "/" ? operand1 / operand2
            : op === "^" ? Math.pow(operand1, operand2)
                : op === "+" ? operand1 + operand2 :
                    op === "-" ? operand1 - operand2
                        : "error";
}

