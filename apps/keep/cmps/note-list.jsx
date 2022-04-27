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

  onChangeColor=()=>{
    this.loadNotes();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps!==this.props) this.loadNotes();
  }

  render() {
    const { notes } = this.state;
    if (notes===null) return <React.Fragment></React.Fragment>;
    return (
      <section className="notes-list-container grid">
        {notes.map((note) => {
          return (
            <div key={note.id} className={`note-card ${note.type} flex`} style={note.style}>
              <NotePreview note={note} loadNotes={()=>this.loadNotes()}/>
            </div>
          );
        })}
      </section>
    );
  }
}

export const NotesList = withRouter(_NotesList);