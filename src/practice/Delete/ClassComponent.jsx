import React from 'react';
//state full component
var f=0;
class ClassComponent extends React.Component
{
    constructor(props){
        super(props);

this.state={
    name:"Vikas yadav",
    age:22,

}

this.Update=this.Update.bind(this);
    }
    Update=()=>{
        console.log("called");
        if(f==0){
        this.setState({
            name:"akshat",
            age:20,
        });
        f=1;
    }
    else if(f==1)
    {
        this.setState({
            name:"Vikas yadav",
            age:22,

        });
        f=0;
    }

    }


   render()
   {
       return(<>
       <h2>class rendering= {this.props.name}</h2>
       <h2>name : {this.state.name} ; age : {this.state.age}</h2>
       <button onClick={this.Update}>click me</button>
       </>);

   }   

}

export {ClassComponent,};

