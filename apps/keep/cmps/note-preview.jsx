import { ImgNote } from "./dynamic-notes/img-note.jsx";
import { TodoNote } from "./dynamic-notes/todo-note.jsx";
import { TextNote } from "./dynamic-notes/text-note.jsx";
import { VideoNote } from "./dynamic-notes/video-note.jsx";
import { EmailNote } from "./dynamic-notes/email-note.jsx";
import { noteService } from "../services/note.service.js";

export class NotePreview extends React.Component {
  state = {
    note: this.props.note,
  };

  onChangeBgcColor = ({ value }) => {
    debugger;
    const { note } = this.state;
    noteService
      .changeBgcColor(note.id, value)
      .then((res) => this.setState({ note: res }));
    this.props.onSetBgc();
  };

  render() {
    const { note } = this.state;
    const { onDeleteNote, onTogglePinNote, onDuplicateNote } = this.props;
    if (!note) return <React.Fragment></React.Fragment>;
    return (
      <React.Fragment>
        <DynamicCmp type={note.type} note={note} />
        <div className="note-general-controls">
          <input
            name="note-color"
            type="color"
            onChange={(ev) => this.onChangeBgcColor(ev.target)}
          />
          <img
            src="assets\img\keep\bin.png"
            onClick={() => onDeleteNote(note.id)}
            alt=""
          />
          <img
            src="assets\img\keep\pin.png"
            onClick={() => onTogglePinNote(note.id)}
            alt=""
          />
          <img
            src="assets\img\keep\duplication.png"
            onClick={() => onDuplicateNote(note.id)}
            alt=""
          />
        </div>
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
    case "note-email":
      return <EmailNote {...props} />;
  }
  return null;
}
