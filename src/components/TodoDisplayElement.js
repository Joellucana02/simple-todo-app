import React from 'react'

const TodoDisplayElement = ({deleteData, data}) => {
    let removeElement = ()=>{
        deleteData(data.id)
    }
    return (
        <div>
            <span>{data.content}</span>
            <button onClick={removeElement}>Remove</button>
        </div>
    )
}

export default TodoDisplayElement
