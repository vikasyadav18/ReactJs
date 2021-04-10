import React, { Component } from 'react';

class ClassPropsState extends Component{
constructor(props)
{
    super(props);
    this.state=
    {
    name:this.props.name,
    roll:this.props.roll,

    }
    this.Update=this.Update.bind(this);
};

 Update(){
    this.setState({
        name:"Mr. Vikas Yadav",
        roll:this.state.roll+5,


});
};

    render()
        {
            return(
                <>
                <h1> hello {this.state.name}</h1>
                <h2> roll : {this.state.roll}</h2>
                <button onClick={this.Update}>press</button>
                </>
            );
        };
}
export default ClassPropsState;