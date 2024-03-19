import React from 'react'
import './Note.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = ({title, content,id,deleteItem}) => {
    const deleteNote = () =>{
        deleteItem(id);
    };
  return (
    <div className='noteCard'>
        <div id="section">
      <h2 id='title'>{title}</h2>
      <h4 id = 'note'>{content}</h4>
      <div className='buttons'>
        <button id='del' onClick={deleteNote}><DeleteOutlineIcon/></button>
      </div>
    </div>
    </div>
  )
}

export default Note