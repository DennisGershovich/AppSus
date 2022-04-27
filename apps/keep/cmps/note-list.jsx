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
      const {notes}=this.state
      if(!notes) return <React.Fragment></React.Fragment>
    return (
      <section className="notes-list-container">
        {notes.map(note=>{return <div key={note.id}>
          <NotePreview/>
        </div>})}
      </section>
    );
  }
}