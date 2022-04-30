import { AddNote } from "../apps/keep/cmps/note-add.jsx";
import { NotesList } from "../apps/keep/cmps/note-list.jsx";
import { NotesFilter } from "../apps/keep/cmps/note-filter.jsx";

export class Notes extends React.Component {
  render() {
    return (
      <main className="notes-app-container flex">
        <AddNote />
        <NotesList />
      </main>
    );
  }
}
