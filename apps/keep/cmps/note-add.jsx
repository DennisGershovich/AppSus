import { noteService } from "../services/note.service.js";
import { emailService } from "../../email/services/emailService.js";
const { withRouter } = ReactRouterDOM;

export class _AddNote extends React.Component {
  state = {
    title: "",
    content: "",
    placeholder: "Enter text",
    noteType: "txt",
    isModalOpen: false,
  };

  componentDidMount() {
    const urlSrcPrm = new URLSearchParams(this.props.location.search);
    const emailId = urlSrcPrm.get("emailId");
    if (!emailId) return;
    this.onAddEmailToNotes(emailId);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "prev props ",
      prevProps.location.pathname,
      " curr state ",
      this.props.location.pathname
    );
  }

  onAddEmailToNotes = (emailId) => {
    const email = emailService.getEmail(emailId);
    if (!email) return;
    const { to, subject, body } = email;
    console.log(`to : ${to} subject ${subject} body ${body}`);
    noteService
      .addEmailToNotes(subject, body, to)
      .then(this.props.history.push("/notes"));
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {});
  };

  onAddFocus = () => {
    // console.log(this.props.location);
    this.props.history.push("/notes/add");
    this.setState({ isModalOpen: true });
  };

  onSubmit = () => {
    debugger
    const { title,content, noteType, isModalOpen } = this.state;
    if (!title) return;
    console.log(this.state.noteType);
    this.setState({ title: "" });
    noteService.addNote(title,content, noteType).then(() => {
      this.props.history.push("/notes");
      this.setState({ isModalOpen: !isModalOpen,content:'',title:'' });
    });
  };

  onSetType = (ev, type) => {
    if (!this.state.title) ev.preventDefault();
    this.setState({ title: "", noteType: type });
    if (type === "img") this.setState({ placeholder: "Enter img url" });
    if (type === "txt") this.setState({ placeholder: "Enter text" });
    if (type === "todo") this.setState({ placeholder: "Enter todo seperated with commas" });
    if (type === "vid") this.setState({ placeholder: "Enter youtube url" });
  };

  render() {
    let { title, content, placeholder, isModalOpen } = this.state;
    return (
      <div className="add-note-container flex">
        <div className="add-note-text flex">
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            onClick={this.onAddFocus}
            onChange={this.handleChange}
          />
          {isModalOpen && (
            <textarea
              value={content}
              name="content"
              placeholder={placeholder}
              onChange={this.handleChange}
            />
          )}
        </div>
        <div className="add-note-controls">
          <img
            src="assets\img\keep\image.png"
            className="add-img-note"
            onClick={(ev) => this.onSetType(ev, "img")}
            alt=""
          />
          <img
            src="assets\img\keep\text.png"
            className="add-text-note"
            onClick={(ev) => this.onSetType(ev, "txt")}
            alt=""
          />
          <img
            src="assets\img\keep\to-do-list.png"
            className="add-todo-note"
            onClick={(ev) => this.onSetType(ev, "todo")}
            alt=""
          />
          <img
            src="assets\img\keep\movie-player.png"
            className="add-vid-note"
            onClick={(ev) => this.onSetType(ev, "vid")}
            alt=""
          />
          <img
            src="assets\img\keep\add-note.png"
            onClick={this.onSubmit}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export const AddNote = withRouter(_AddNote);
