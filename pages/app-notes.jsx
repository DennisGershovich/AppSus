import { AddNote } from "../cmps/notes-cmp/add-note.jsx";
import { NotesList } from "../cmps/notes-cmp/note-list.jsx";

export class Notes extends React.Component{

    render(){
        return <main className="notes-app-container">
            <AddNote/>
            <NotesList/>
        </main>
    }
}