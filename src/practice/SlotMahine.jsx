import React from 'react';
import './Slotmachine.css';

export function SlotMahine(props) {
    let sname=props.sname;
    let sname=props.sname;
    let sname=props.sname;
arr[10]=[1,1,1,11,11,1,11,1,1,1];
let{a,b,c,d}=arr;
    let {sname,roll,clas}=props;
    return(
        <>
       
            <h1>{sname}</h1>
            <h1>{roll}</h1>
            <h1>{clas}</h1>
        </>
    );
}

export default function Trig()
{
    return(
    <>
    <SlotMahine
    sname="Ranjan"
    roll="5"
    clas="10"
    />
    <SlotMahine
    sname="yadav"
    roll="6"
    clas="11"
    />
    <SlotMahine
    sname="vik"
    roll="50"
    clas="12"
    />
    
    </>
    );

}