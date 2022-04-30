import { noteService } from "../../services/note.service.js";

const { Link } = ReactRouterDOM;

export class EmailNote extends React.Component {
  state = {
    note: this.props.note,
    subject: "",
    body: "",
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
    const { note, subject, body } = this.state;
    const newNote = noteService.editNote(note.id, { subject, body });
    this.setState({ note: newNote, editToggle: false });
  };

  render() {
    const { note, subject, body, editToggle } = this.state;
    if (!note) return <React.Fragment></React.Fragment>;
    return (
      <div>
        <h2>{note.info.txt}</h2>
        <p>{note.info.body}</p>
        <small>{note.info.to}</small>
        {editToggle && (
          <form onSubmit={this.onSaveChanges}>
            <input
              type="text"
              name="subject"
              value={subject}
              placeholder="Enter new email title!"
              onChange={this.handleChange}
            />
            <textarea
              name="body"
              value={body}
              placeholder="Enter new email body!"
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
