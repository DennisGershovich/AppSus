import { noteService } from "../../services/note.service.js";

const { Link } = ReactRouterDOM;

export class TextNote extends React.Component {
  state = {
    text: this.props.note.info.txt,
    editToggle: false,
  };

  toggleEdit = () => {
    this.setState({ editToggle: !this.state.editToggle });
  };

  handleChange = ({ target }) => {
    this.setState({ text: target.value });
  };

  onSaveChanges = (ev) => {
    ev.preventDefault();
    const { note } = this.props;
    const newNote = noteService.editNote(note.id, { txt: this.state.text });
    this.setState({ note: newNote, editToggle: false });
  };

  render() {
    let { note } = this.props;
    let { text, editToggle } = this.state;
    if (!note) return <React.Fragment></React.Fragment>;
    return (
      <div>
        <h1>{text}</h1>
        {editToggle && (
          <form onSubmit={this.onSaveChanges}>
            <input type="text" value={text} onChange={this.handleChange} />
            <button>save</button>
          </form>
        )}
        <Link to="/notes/edit" onClick={this.toggleEdit}>
          <div className="edit-button-container">
            <img
              src="assets\img\keep\edit-note.png"
              onClick={this.toggleEdit}
              alt=""
            />
          </div>
        </Link>
      </div>
    );
  }
}
