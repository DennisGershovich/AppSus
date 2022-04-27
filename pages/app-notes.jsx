import { AddNote } from "../cmps/notes-cmp/add-note.jsx";
import { NotesList } from "../cmps/notes-cmp/note-list.jsx";

export class Notes extends React.Component{

    render(){
        return <section className="notes-app-container">
            <AddNote/>
            <NotesList/>
        </section>
    }
}