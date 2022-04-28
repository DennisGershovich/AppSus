import { noteService } from "../../services/note.service.js";

const { Link } = ReactRouterDOM;
export class TodoNote extends React.Component {
  state = {
    note: this.props.note,
    todo: "",
    editToggle: false,
  };

  toggleEdit = () => {
    this.setState({ editToggle: !this.state.editToggle });
  };

  onMarkDone = (todoItemIdx) => {
    const { note } = this.state;
    const newNote = noteService.markTodoDone(note.id, todoItemIdx);
    this.setState({ note: newNote });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onSaveChanges = (ev) => {
      debugger
    ev.preventDefault();
    const { note, todo,} = this.state;
    const newNote=noteService.editNote(note.id, { todo });
    this.setState({note:newNote,editToggle:false})

  };

  render() {
    const { note, todo, editToggle } = this.state;
    if (!note) return <React.Fragment></React.Fragment>;
    return (
      <div>
        <h2>{note.info.label}</h2>
        <ul className="todo-list">
          {note.info.todos.map((todo, idx) => {
            return (
              <li
                key={idx}
                className={`${todo.doneAt ? "done" : ""}`}
                onClick={() => this.onMarkDone(idx)}
              >
                {todo.txt}
              </li>
            );
          })}
        </ul>
        {editToggle && (
          <form onSubmit={this.onSaveChanges}>
            <input
              type="text"
              name="todo"
              value={todo}
              placeholder="Enter new todo!"
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
