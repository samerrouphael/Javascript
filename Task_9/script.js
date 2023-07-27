
var p1;
var p2;
var num1;
var num2;
function myFunctionadd(p1, p2) {
    let x = p1 + p2;
    return x;

}

function myFunctionsubstract(p1, p2) {
    let x = p1 - p2;
    console.log(p1 - p2)
}

function myFunctionmultiply(p1, p2) {
    console.log(p1 * p2);
}

function myFunctiondivide(p1, p2) {
    if (p2 !== 0) {
        console.log(p1 / p2)
    }
    else { console.log(Impossible) }
}
    myFunctionadd(4, 2);
    myFunctiondivide(4, 2);
    myFunctionmultiply(4, 2);
    myFunctionsubstract(4, 2);

function Calculator(type, num1, num2){
if (type === 'add') {
    console.log('add',num1 + num2)}
    else if(type === 'substract'){
    console.log('substract',num1 - num2)}

    else if(type === 'mul')
    { console.log('mul',num1 * num2) }


else {
    console.log('divide',num1 / num2)
}
}
 Calculator('add',1,2);
 Calculator('substract', 1, 2);
 Calculator('mul', 1, 2);
 Calculator('divide',1,2);

