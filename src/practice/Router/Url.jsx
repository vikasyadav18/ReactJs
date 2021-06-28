import React from 'react';
import {useHistory, useLocation, useParams} from 'react-router-dom';
const Url=()=>{
    const location=useLocation();
    const history=useHistory();
    const { fname ,lname} = useParams();
console.log(location);
console.log(history);

    return(
        <>
        <h1>my name is {fname} {lname}</h1>
        <p>My current location is {location.pathname}</p>

        {location.pathname==="/url/vikas/yadav"?
        (<button onClick={()=>alert("you got me 🐲")}>click me🦇
        </button>):null}
<br/>
        {location.pathname==="/url/vikas/yadav"?
        (<button className="btn" onClick={()=>history.goBack()}>back
        </button>):null}
        </>
    );
}
export default Url;