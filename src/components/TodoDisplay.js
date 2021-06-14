import React from 'react'
import TodoDisplayElement from './TodoDisplayElement'
const TodoDisplay = ({deleteData, data ,int}) => {
    return (
        <div>
            {int?<span>{int}</span>:<span></span>}
            
            {
                data.length===0?<p>No data</p>:data.map(e=> 
                <TodoDisplayElement key={e.id} deleteData={deleteData} data={e} int={int}/>)
            }            
        </div>
    )
}

export default TodoDisplay
