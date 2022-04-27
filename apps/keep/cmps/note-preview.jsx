import { ImgNote } from "./dynamic-notes/img-note.jsx";
import { TodoNote } from "./dynamic-notes/todo-note.jsx";
import { TextNote } from "./dynamic-notes/text-note.jsx";
import { VideoNote } from "./dynamic-notes/video-note.jsx";

export class NotePreview extends React.Component {
  state = {
    note: this.props.note,
  };

  render() {
    //   debugger
    const { note } = this.state;
    if (!note) return <React.Fragment></React.Fragment>;
    return (
      <div className="noteCard">
        {/* {note.type} */}
        <DynamicCmp type={note.type} note={note} />
      </div>
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
