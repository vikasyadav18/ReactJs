import React from 'react';
import './Practical1.css';
class ClassComponent extends React.Component
{
    render()
    {
        return(
            <React.Fragment>
                <div className="classDiv">
            <h1>This is Class Component</h1>
            <p>created By : <span>Pankaj Kapoor Sir</span></p>
            </div>
        </React.Fragment>
        );
        
    }
}

export default ClassComponent;