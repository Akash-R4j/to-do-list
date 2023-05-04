import React from "react";

function ToDoItem(props){
    return ( <div onClick={() =>{
        props.onChecked(props.id);
    }}>
    <li>{props.text}</li>;
    </div>
    )
}

export default ToDoItem;





// function ToDoItem(props){
//     const [line ,setLine] = useState(false);

//     function lineThrough(){
//         setLine( (prevValue) => {
//             return !prevValue;
//         }); 
//     }

//  return  <li onClick={lineThrough} style={{textDecoration :line ?'line-through' : 'none'}} >{props.text}</li>;
// }

// export default ToDoItem;