import { AddNote } from "../apps/keep/cmps/note-add.jsx";
import { NotesList } from "../apps/keep/cmps/note-list.jsx";

export class Notes extends React.Component{

    render(){
        return <main className="notes-app-container">
            <AddNote/>
            <NotesList/>
        </main>
    }
}