
function add(x,y)
{
    let sum=x+y;
    return sum;
}
function multiply(x,y)
{
    let mult=x*y;
    return mult;
}
function divide(x,y)
{
    let div=x/y;
    div=div.toFixed(3);
    return div;
}  
function subtract(x,y)
{
    let sub=x-y;
    return sub;
}
function modulus(x,y)
{
    let mod=x%y;
    return mod;
}


export {add,multiply,divide,subtract,modulus};
