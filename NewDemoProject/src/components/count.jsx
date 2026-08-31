import "./count.css"
import { useState } from "react"
function Count(){
    const [count,setCount]=useState(0);
    return(
        <>
        <div style={{textAlign:"center"}}>
        <h1>count</h1>
        <h3 style={{textAlign: "center"}}> count is :{count}</h3>
        <div className="d1">
<button onClick={()=>{setCount(count+1)}}>add</button>
         <button onClick={()=>{setCount(count-1)}}>remove</button>
         
        </div>
        <h1 className="badge rounded-pill text-bg-info button">Lets count</h1>
        </div>
        </>
    )
}
export default Count