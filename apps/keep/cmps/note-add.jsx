import { noteService } from "../services/note.service.js";
import { emailService } from "../../email/services/emailService.js";
const { withRouter } = ReactRouterDOM;

export class _AddNote extends React.Component {
  state = {
    primaryValue: "",
    placeholder: "Enter text",
    noteType: "txt",
  };

  componentDidMount() {
    const urlSrcPrm = new URLSearchParams(this.props.location.search);
    const emailId = urlSrcPrm.get("emailId");
    if (!emailId) return;
    this.onAddEmailToNotes(emailId);
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
    this.props.history.push("/notes/add");
  };

  onSubmit = () => {
    const { primaryValue, noteType } = this.state;
    if (!primaryValue) return;
    console.log(this.state.noteType);
    this.setState({ primaryValue: "" });
    noteService
      .addNote(primaryValue, noteType)
      .then(this.props.history.push("/notes"));
  };

  onSetType = (ev, type) => {
    if (!this.state.primaryValue) ev.preventDefault();
    this.setState({ primaryValue: "", noteType: type });
    if (type === "img") this.setState({ placeholder: "Enter img url" });
    if (type === "txt") this.setState({ placeholder: "Enter text" });
    if (type === "todo") this.setState({ placeholder: "Enter todo title" });
    if (type === "vid") this.setState({ placeholder: "Enter youtube url" });
  };

  render() {
    let { primaryValue, placeholder } = this.state;
    return (
      <div className="add-note-container flex">
        <div className="add-note-controls flex">
          <input
            type="text"
            name="primaryValue"
            value={primaryValue}
            placeholder={placeholder}
            onClick={this.onAddFocus}
            onChange={this.handleChange}
          />
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
        </div>
        <div className="add-btn-container">
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
