import { noteService } from "../../services/note.service.js";

const { Link } = ReactRouterDOM;

export class ImgNote extends React.Component {
  state = {
    note: this.props.note,
    editToggle: false,
    title: "",
    url: "",
  };

  toggleEdit = () => {
    this.setState({ editToggle: !this.state.editToggle });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onSaveChanges = (ev) => {
    ev.preventDefault();
    const { note, title, url } = this.state;
    const newNote = noteService.editNote(note.id, { title, url });
    this.setState({ note: newNote, editToggle: false });
  };

  render() {
    let { note, editToggle, title, url } = this.state;
    if (!note) return <React.Fragment></React.Fragment>;
    return (
      <div className="note-content">
        <div className="img-container">
          <img src={`${note.info.content}`} alt="" />
        </div>
        <h3>{note.info.txt}</h3>
        {editToggle && (
          <form onSubmit={this.onSaveChanges}>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Enter title"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="url"
              value={url}
              placeholder="Enter image url"
              onChange={this.handleChange}
            />
            <button className="save-btn-container">
              <img src="assets\img\keep\save.png" alt="" />
            </button>
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
