import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';

import './CreateNote.css'
const CreateNote = (props) => {
    const[expand,setExpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const InputEvent = (event) => {

        const { name, value } = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });

        console.log(note);

    };

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    const expandIt = () =>
    {
        setExpand(true);
    };

    // const addEvent = () => {
    //     props.passNote(note);
    //     setNote({title:"", content:""})
    //     setExpand(false);
    // }

    const addEvent = () => {
        if (Object.values(note).some(param => param.length > 0)) {
            props.passNote(note);
            setNote({title:"", content:""});
            setExpand(false);
        } else {
                // Handing the case of empty note
           alert("At least one parameter of note should have a length greater than 0.");
        }
    }

    return (
        <div className="main_note">
            <form onSubmit={handleSubmit}>
                {expand?
                <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder='Enter Title' className='title' autoComplete='off' /> : null}
                <textarea className="note" name="content" value={note.content} onChange={InputEvent} placeholder='Enter Note' onClick={expandIt}></textarea>
                {expand?<button className='add' onClick={addEvent}><AddIcon/></button> : null}
            </form>
        </div>
    )
}

export default CreateNote