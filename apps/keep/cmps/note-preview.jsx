import { ImgNote } from "./dynamic-notes/img-note.jsx";
import { TodoNote } from "./dynamic-notes/todo-note.jsx";
import { TextNote } from "./dynamic-notes/text-note.jsx";
import { VideoNote } from "./dynamic-notes/video-note.jsx";
import { noteService } from "../services/note.service.js";

export class NotePreview extends React.Component {
  state = {
    note: this.props.note,
  };

  onChangeBgcColor=({value})=>{
    // debugger
    const {note}=this.state
    noteService.changeBgcColor(note.id,value)
    this.props.loadNotes()
  }

  render() {
    const { note } = this.state;
    console.log('the style ',note.style);
    if (!note) return <React.Fragment></React.Fragment>;
    return (
      <React.Fragment>
        <DynamicCmp type={note.type} note={note}/>
        <input type="color" onChange={(ev)=>this.onChangeBgcColor(ev.target)}/>
      </React.Fragment>
    );
  }
}

function DynamicCmp(props) {
  switch (props.type) {
    case "note-txt":
      return <TextNote {...props} />;
    case "note-img":
      return <ImgNote {...props} />;
    case "note-todos":
      return <TodoNote {...props} />;
    case "note-vid":
      return <VideoNote {...props} />;
  }
  return null;
}
