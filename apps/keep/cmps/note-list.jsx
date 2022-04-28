import { noteService } from "../services/note.service.js";
import { NotePreview } from "./note-preview.jsx";

const { withRouter } = ReactRouterDOM;
class _NotesList extends React.Component {
  state = {
    pinnedNotes:null,
    notes: null,
  };

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    noteService.query().then((res) => {
      const pinnedNotes=res.filter(note=>note.isPinned)
      const regNotes=res.filter(note=>!note.isPinned)
      this.setState({ pinnedNotes,notes: regNotes });
    });
  };

  onDeleteNote=(noteId)=>{
    noteService.deleteNote(noteId)
    this.loadNotes();
  }

  onSaveEdit = () => {
    this.loadNotes();
  };

  onTogglePinNote=(noteId)=>{
    noteService.pinNoteToggle(noteId);
    this.loadNotes();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      (prevProps.location.pathname !== this.props.location.pathname) &
      (prevProps.location.pathname === "/notes/edit")
    )
      this.loadNotes();
  }

  render() {
    const { notes,pinnedNotes } = this.state;
    if (notes === null & pinnedNotes===null) return <React.Fragment></React.Fragment>;
    return (
      <section className="notes-list-container grid">
        {pinnedNotes&&pinnedNotes.map((note) => {
          return (
            <div
              key={note.id}
              className={`note-card ${note.type} flex pinned`}
              style={note.style}
            >
              <NotePreview note={note} onSaveEdit={() => this.onSaveEdit()} onDeleteNote={this.onDeleteNote}  onTogglePinNote={this.onTogglePinNote}/>
            </div>
          );
        })}
      
        {notes&&notes.map((note) => {
          return (
            <div
              key={note.id}
              className={`note-card ${note.type} flex`}
              style={note.style}
            >
              <NotePreview note={note} onSaveEdit={() => this.onSaveEdit()} onDeleteNote={this.onDeleteNote}  onTogglePinNote={this.onTogglePinNote}/>
            </div>
          );
        })}
      </section>
    );
  }
}

export const NotesList = withRouter(_NotesList);
