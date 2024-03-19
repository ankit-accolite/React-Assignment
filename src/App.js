import Header from './Header/Header';
import CreateNote from './Note/CreateNote';
import Note from './MyNote/Note';
import './App.css';
import { useState } from 'react';

function App() {
    const [addItem, setAddItem] = useState([]);



    const addNote = (note) => {
        console.log("note=>", note);
        //alert("I am clicked");  
        setAddItem((prev) => {
            return [...prev, note];
        });

    };

    const onDelete = (id) => {
        setAddItem((olddata) =>
            olddata.filter((currdata, indx) => {
                return indx !== id;
            })
        );
    };

    return (
        <div className="App">
            <Header />
            <CreateNote passNote={addNote} />
            <center>

            
            <div className='noteslist'>
            {addItem.map((val, index) => {
                return <Note
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    deleteItem={onDelete}
                />
            })}
            </div>
            </center>
        </div>
    );
}

export default App;
