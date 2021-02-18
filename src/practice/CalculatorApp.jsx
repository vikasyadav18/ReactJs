
import {add,multiply,divide,subtract,modulus} from './Calculator';

function CalculatorApp()
{
    return (
        <>
        <ol>
            <li>Sum is {add(10,3)}</li>
            <li>Multiply is {multiply(10,3)}</li>
            <li>divide is {divide(10,3)}</li>
            <li>subtract is {subtract(15,5)}</li>
            <li>modulus is {modulus(15,2)}</li>
        </ol>
        </>
        );
}


export default CalculatorApp;