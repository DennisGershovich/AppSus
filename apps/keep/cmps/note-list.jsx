import { noteService } from "../services/note.service.js";
import { NotePreview } from "./note-preview.jsx";

const { withRouter } = ReactRouterDOM;
class _NotesList extends React.Component {
  state = {
    notes: null,
  };

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    noteService.query().then((res) => {
      this.setState({ notes: res });
    });
  };

  onSaveEdit = () => {
    this.loadNotes();
  };

  onChangeColor = () => {
    this.loadNotes();
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("prev props", prevProps);
    console.log("this props", this.props);
    if (
      (prevProps.location.pathname !== this.props.location.pathname) &
      (prevProps.location.pathname === "/notes/edit")
    )
      this.loadNotes();
  }

  render() {
    const { notes } = this.state;
    if (notes === null) return <React.Fragment></React.Fragment>;
    return (
      <section className="notes-list-container grid">
        {notes.map((note) => {
          return (
            <div
              key={note.id}
              className={`note-card ${note.type} flex`}
              style={note.style}
            >
              <NotePreview note={note} onSaveEdit={() => this.onSaveEdit()} />
            </div>
          );
        })}
      </section>
    );
  }
}

export const NotesList = withRouter(_NotesList);
