import React from 'react'
import boys from './image/boys.jpg';
import dark from './image/dark.jpg';
import strengerthings from './image/strenger things.jpg';
import sweethome from './image/sweet home.jpg';
import './Cardcss.css';
import Card from './Card';


export default function WebApp() {
    return (
        
                [
                     <div className="heading">
                     <h1 >LIST OF TOP 4 WEB SERIES</h1>
                     </div>,
              
                     <Card
                      imgsrc={boys}
                      title="An Amazon Web Series"
                      sname="BOYS"
                      link="https://www.youtube.com/watch?v=tcrNsIaQkb4"
                     />,
                     <Card
                      imgsrc={dark}
                      title="A Netflix Original Series"
                      sname="DARK"
                      link="https://www.youtube.com/watch?v=cq2iTHoLrt0"
                     />,
                     <Card
                      imgsrc={strengerthings}
                      title="A Netflix Original Series"
                      sname="Stranger Things"
                      link="https://www.youtube.com/watch?v=b9EkMc79ZSU"
                     />,
                     <Card
                      imgsrc={sweethome}
                      title="A Netflix Original Series"
                      sname="Sweet Home"
                      link="https://www.youtube.com/watch?v=7rI56NmD33Y"
                     />
                 ]
        
    );
}
