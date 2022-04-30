import { noteService } from "../services/note.service.js";
import { NotePreview } from "./note-preview.jsx";
import { NotesFilter } from "./note-filter.jsx";

const { withRouter } = ReactRouterDOM;
class _NotesList extends React.Component {
  state = {
    pinnedNotes: null,
    notes: null,
    filterBy: null,
    filterIsOpen: false,
  };

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    noteService.query(this.state.filterBy).then((res) => {
      const pinnedNotes = res.filter((note) => note.isPinned);
      const regNotes = res.filter((note) => !note.isPinned);
      this.setState({ pinnedNotes, notes: regNotes });
    });
  };

  onDeleteNote = (noteId) => {
    noteService.deleteNote(noteId);
    this.loadNotes();
  };

  onSetFilter = ({ search, type }) => {
    if (!search & (type === null)) return;
    this.setState({ filterBy: { search, type } }, () => this.loadNotes());
  };

  onFilterToggle = () => {
    this.setState({ filterIsOpen: !this.state.filterIsOpen });
  };

  onSetBgc = () => {
    this.loadNotes();
  };

  onTogglePinNote = (noteId) => {
    noteService.pinNoteToggle(noteId);
    this.loadNotes();
  };

  onDuplicateNote = (noteId) => {
    noteService.duplicateNote(noteId);
    this.loadNotes();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname)
      this.loadNotes();
  }

  render() {
    const { notes, pinnedNotes, filterIsOpen } = this.state;
    if ((notes === null) & (pinnedNotes === null))
      return <React.Fragment></React.Fragment>;
    return (
      <section className="notes-display-container flex">
        <div className="filter-icon-container">
          <img
            src="assets\img\keep\filter.png"
            alt=""
            onClick={this.onFilterToggle}
          />
        </div>
        {filterIsOpen && <NotesFilter onSetFilter={this.onSetFilter} />}
        <section className="notes-list-container grid">
          {pinnedNotes &&
            pinnedNotes.map((note) => {
              return (
                <div
                  key={note.id}
                  className={`note-card ${note.type} flex pinned`}
                  style={note.style}
                >
                  <NotePreview
                    note={note}
                    onSetBgc={() => this.onSetBgc()}
                    onDeleteNote={this.onDeleteNote}
                    onTogglePinNote={this.onTogglePinNote}
                    onDuplicateNote={this.onDuplicateNote}
                  />
                </div>
              );
            })}

          {notes &&
            notes.map((note) => {
              return (
                <div
                  key={note.id}
                  className={`note-card ${note.type} flex`}
                  style={note.style}
                >
                  <NotePreview
                    note={note}
                    onSetBgc={this.onSetBgc}
                    onDeleteNote={this.onDeleteNote}
                    onTogglePinNote={this.onTogglePinNote}
                    onDuplicateNote={this.onDuplicateNote}
                  />
                </div>
              );
            })}
        </section>
      </section>
    );
  }
}

export const NotesList = withRouter(_NotesList);
