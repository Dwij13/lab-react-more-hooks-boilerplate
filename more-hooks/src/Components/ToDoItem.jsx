import React from "react";

const ToDoItem= ({item:{data,isHidden},index,dispatch})=>{
  return(
    <div style={{
      backgroundColor:"",
      width:"",
      padding:"10px",
      display:"flex",
      justifyContent:"center",
      flexDirection:"column"
    }}>
<h3>{isHidden?"This Context is Hidden":data}</h3>
<button onClick={()=>{
  dispatch({type:"Change",payload:index})
}
}>Toggle</button>
    </div>
  )
}

export default ToDoItem