import { noteService } from "../../services/note.service.js";

const { Link } = ReactRouterDOM;

export class VideoNote extends React.Component {
  state = {
    note: this.props.note,
    inputUrl: "",
    editToggle: false,
  };

  toggleEdit = () => {
    this.setState({ editToggle: !this.state.editToggle });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onSaveChanges = (ev) => {
    ev.preventDefault();
    const { note, inputUrl } = this.state;
    const newNote = noteService.editNote(note.id, { inputUrl });
    this.setState({ note: newNote, editToggle: false });
  };

  render() {
    let { note, inputUrl, editToggle } = this.state;
    if (!note) return <React.Fragment></React.Fragment>;
    return (
      <div className="note-content">
        <div className="video-player-container">
          <iframe src={`${note.info.url}`}></iframe>
        </div>

        {editToggle && (
          <form onSubmit={this.onSaveChanges}>
            <input
              type="text"
              name="inputUrl"
              value={inputUrl}
              placeholder="Enter youtube link"
              onChange={this.handleChange}
            />
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
