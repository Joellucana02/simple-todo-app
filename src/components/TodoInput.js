import React, { useState } from 'react';
const initialTemplate = {
    id:null,
    content:'',
}
const TodoInput = ({createData, setInt}) => {
const [template, setTemplate] = useState(initialTemplate)
    let handleChange = (e)=>{
        setInt(e.target.value)
        setTemplate({
            ...template,
            [e.target.name]:e.target.value,
        })
    }
    let handleSubmit = (e)=>{
        e.preventDefault();
        if(!template.content){
            alert('Data required')
            return;
        }
        createData(template)
        setInt(null)
        cleaner()
    }
    let cleaner = (e)=>{
        setTemplate(initialTemplate)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='content' onChange={handleChange} value={template.content}/>
                <input type='submit' value='ADD'/>
            </form>
        </div>
    )
}

export default TodoInput
