
import './Cardcss.css';
import Card from './Card';
import CardArray from './CardArray';

function FunctionName(nValue)
{
    // console.log(nValue);
    return(
        <Card
        imgsrc={nValue.imgsrc}
        title={nValue.title}
        sname={nValue.sname}
        link={nValue.link}
        />
    );

    
}

export default function WebApp() {
    return (
        <>
         <div className="heading">
         <h1 >LIST OF TOP 4 WEB SERIES</h1>
         </div>
        {CardArray.map(FunctionName)}
       
        
{/*  ------------Simply Picking Array Elements---------- 
<Card
             imgsrc={CardArray[0].imgsrc}
             title={CardArray[0].title}
             sname={CardArray[0].sname}
             link={CardArray[0].link}
             /> */}
               
                {/* <Card
                imgsrc={CardArray[1].imgsrc}
                title={CardArray[1].title}
                sname={CardArray[1].sname}
                link={CardArray[1].link}
                />
                <Card
                imgsrc={CardArray[2].imgsrc}
                title={CardArray[2].title}
                sname={CardArray[2].sname}
                link={CardArray[2].link}
                />
                <Card
                imgsrc={CardArray[3].imgsrc}
                title={CardArray[3].title}
                sname={CardArray[3].sname}
                link={CardArray[3].link}
                /> */}



        </>      
            
                     
        
    );
}
