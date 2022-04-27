import { noteService } from "../services/note.service.js";
import { NotePreview } from "./note-preview.jsx";

export class NotesList extends React.Component {
  state = {
    notes: null,
  };

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    noteService.query().then((res) => {
      // debugger
      console.log('notes ',res);
      this.setState({ notes: res });
    });
  };

  onChangeColor=()=>{
    this.loadNotes();
  }

  render() {
    // debugger
    const { notes } = this.state;
    if (notes===null) return <React.Fragment></React.Fragment>;
    console.log('the color from the renders ',notes[0].style);
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
