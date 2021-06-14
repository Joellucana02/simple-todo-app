import React, { useState } from 'react';
import TodoDisplay from './TodoDisplay'
import TodoInput from './TodoInput'
import {v4 as uuidv4} from 'uuid'
const initialData = [
    {
        id:1,
        content:"It accepts author (an object),  and describes a comment on a social media website."
    },
    {
        id:2,
        content:"text (a string), and date (a date) as props,"
    },
    {
        id:3,
        content:"and describes a comment on a social media website."
    }
]
const Todo = () => {
    const [data, setData] = useState(initialData)
    const [int, setInt] = useState(null)
    const createData = (e)=>{
        e.id = uuidv4()
        setData([
            ...data, e
        ])
    }
    const deleteData = (e)=>{
        let added = data.filter(el=>el.id!==e)
        setData(added)
    }
    return (
        <div>
            <TodoInput createData={createData} setInt={setInt}/>
            <TodoDisplay deleteData={deleteData} data={data} int={int}/>
        </div>
    )
}

export default Todo
