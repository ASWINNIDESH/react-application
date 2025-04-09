// import React,{useState} from 'react'
// const Todo=()=>{
//     const[state,setState]=useState(0);
//     return(
//         <div
//         border 
// >Todo
//             <h1>{state}</h1>
//             <button onClick={()=>setState(state+1)}>Increment</button>
//             <button onClick={()=>setState(state-2)}>Decrement</button>
//             <button onClick={()=>setState(state)}>Reset</button>
            
//         </div>
//     )
// }
// export default Todo; 

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement ,reset} from "./store";
const Todo= () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
   <div
   style={{
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         height: "100vh",
   }}><div
   style={{
       fontSize: "40px",
       border: "1px solid black",
       padding: "5%",
       maxWidth: "200px",
       backgroundColor: "green",
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
   }}                                                          
>
 <div>Count:{count}</div><br/>
 
 <button onClick={() => dispatch(increment)}>Increment</button><br/>
 <br/>
   <button onClick={() => dispatch(decrement)}>Decrement</button><br/><br/>
   <button onClick={() => dispatch(reset)}>Reset</button><br/><br/>
   
 
</div></div> 
  );
};

export default Todo;