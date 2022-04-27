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
      this.setState({notes:res});
    });
  };

  render() {
    // debugger
      const {notes}=this.state
      if(notes===null) return <React.Fragment></React.Fragment>
    return (
      <section className="notes-list-container grid">
        {notes.map(note=>{return (
        <div key={note.id} className={note.type}>
          <NotePreview note={note}/>
         </div>
        )
      })}
      </section>
    );
  }
}