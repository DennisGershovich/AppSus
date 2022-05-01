import { noteService } from "../../services/note.service.js";

const { Link } = ReactRouterDOM;

export class TextNote extends React.Component {
  state = {
    text: this.props.note.info.txt,
    content:this.props.note.info.content,
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
    const { note } = this.props;
    const newNote = noteService.editNote(note.id, { txt: this.state.text });
    this.setState({ note: newNote, editToggle: false });
  };

  render() {
    let { note } = this.props;
    let { text,content, editToggle } = this.state;
    if (!note) return <React.Fragment></React.Fragment>;
    return (
      <div className="note-content flex">
        <h1 style={{textDecoration:'underline'}}>{text}</h1>
        <h3>{content}</h3>
        {editToggle && (
          <form onSubmit={this.onSaveChanges}>
            <input type="text" placeholder="Title" name="text" value={text} onChange={this.handleChange} />
            <textarea value={content} placeholder="Type here" name="content" onChange={this.handleChange}/>
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
