/* ---Pila con Array---
 * Autor: Miguel Angelo Silva Gómez 
 */

export const Stack = function () {
    let pointer = -1; // pila vacia
    let sizeStack = 20;
    let list = [];

    this.emptyList = function () {
        return pointer === -1 ? true : false;
    };

    this.fullStack = function () {
        if (pointer === sizeStack - 1) return true;
        else return false;
    };

    this.push = function (value) {
        if (this.fullStack()) return new Error("Overflow");
        pointer++;
        return list[pointer] = value;
    };


    //Eliminar la cima de la pila
    this.pop = function () {
        if (this.emptyList()) return new Error("Underflow");
        let aux = list[pointer];
        list[pointer] = undefined;
        pointer--;
        return aux
    };

    this.clearStack = function () {
        pointer = - 1;
    };

    this.showStackSize = function () {
        return pointer + 1;
    };

    this.topElement = function(){
        return list[pointer];
    }
};


