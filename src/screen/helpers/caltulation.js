/*
*  Autor: Miguel Angelo Silva Gómez
*  GitHub: https://github.com/noEspagueti
*

*  ===========================
*  |Notación infija a postfija| 
*  ===========================
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



import { linkedList } from './Stack'
// export let operators = new linkedList(); // pila para operadores
// export let operand = new linkedList();   // pila para operandos

const exprePostFija = function () {

    const OPERATORS_PRIORITY = [
        { op: "^", valueOutStack: 4, valueInStack: 3 },
        { op: "x", valueOutStack: 2, valueInStack: 2 },
        { op: "/", valueOutStack: 2, valueInStack: 2 },
        { op: "+", valueOutStack: 1, valueInStack: 1 },
        { op: "-", valueOutStack: 1, valueInStack: 1 },
        { op: "(", valueOutStack: 5, valueInStack: 0 }
    ];


    this.convert = function (infija) {

    }


    this.isOperator = function ( operator ) {
        
    }

    this.priorityOutExp = function (operator) {
        return OPERATORS_PRIORITY.map((item) => {
            if (item.op === operator) item.valueOutStack;
        });
    }

    this.priorityInStack = function (operator) {
        return OPERATORS_PRIORITY.map((item) => {
            if (item.op === operator) item.valueInStack;
        });
    }

}















/*

⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⠖⠒⠒⠒⠒⠦⢤⣀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣦⡀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠁⠀⠀⣾⣛⣛⣖⣒⠦⣀⠀⠀⠀⢻⢳⡀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠀⠀⢀⣀⣉⠀⠀⠀⠈⠓⢎⢷⡀⠀⠈⡆⢷⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠃⠀⡾⠛⣄⠈⠙⣆⣠⣤⣤⣈⠙⠁⠀⠀⡇⠘⡆
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠇⠀⠸⣇⠀⠉⠀⢀⡟⠁⢀⡀⠙⣿⠀⠀⠀⡇⠀⣷
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠀⣀⣀⣿⣲⠤⡴⠛⣇⠀⠈⠉⢁⡿⠀⠀⣸⠁⠀⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠁⡞⡟⢻⣿⣄⣹⣡⠖⠈⣷⣲⣖⡏⠀⠀⠀⡏⠀⠀⡿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡇⠀⢇⢧⠀⠘⠻⣽⣻⣶⣶⣶⠯⣟⡄⠀⠀⣸⠀⠀⢰⠃
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡏⠀⠀⠈⠫⡿⣶⣄⡀⢰⣟⡛⢦⡀⢸⢸⠀⠀⡇⠀⠀⡼⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⢶⡏⠁⠀⠀⠈⠈⠙⠚⠽⣶⣿⣾⣿⡻⠏⠀⢸⠀⠀⢠⠇⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠃⠈⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⢠⠉⠉⠁⠀⢀⡇⠀⠀⣞⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠀⠀⠀⠀⣼⠀⠀⢀⡽⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⠀⠸⠁⠀⠀⡿⠁⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡟⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣞⣠⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⡚⡷⠀⠀⣼⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⡿⢹⣷⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡇⠀⠘⠛⠃⠀⣰⠇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠁⠀⠀⠀⠀⢠⠟⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣀⣠⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠁⢀⡄⠀⠀⠀⡞⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢸⡏⠁⠀⠀⠀⠀⡈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠃⢀⡞⠀⠀⠀⡴⠃⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⣼⠁⠀⠀⢠⡴⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡸⠃⠀⡞⠁⠀⠀⡼⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢀⣞⡥⡄⠀⠀⢸⡿⠀⠀⠀⠀⡠⠃⠀⠀⠀⠀⡰⠁⢀⡞⠀⠀⠀⡼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⡞⢸⣇⠀⠀⠀⠈⠀⠀⠀⢀⡰⠁⠀⠀⠀⢀⡼⠁⢀⡞⠀⠀⠀⣾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣼⠁⢀⡎⠀⠀⠀⠀⠀⠀⠀⡞⠁⠀⠀⠀⣠⠏⠀⣠⠋⠀⠀⢰⡶⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢠⠇⠀⡞⠀⠀⠀⠀⠀⠀⢀⠞⠀⠀⠀⠀⠰⠃⡀⢹⡅⠀⠀⣰⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣼⠀⢰⠁⠀⠐⣄⠀⠀⡠⠎⠀⠀⠀⢀⡀⠀⠀⠛⠋⠀⢀⡴⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⢀⠇⠀⠀⠀⠈⠉⠉⠀⠀⠀⠀⢠⠎⠀⠀⠀⠀⠀⣰⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠸⣼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⠋⡠⠂⠀⠀⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠹⣦⡍⢀⠀⠀⠀⠀⠀⣠⠞⣠⠞⠁⢀⣴⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠈⠳⠾⠥⣀⣠⣔⣋⣵⣊⡤⠴⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
*/