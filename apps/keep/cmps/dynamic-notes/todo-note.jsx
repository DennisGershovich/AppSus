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

  onToggleDone = (todoItemIdx) => {
    const { note } = this.state;
    const newNote = noteService.toggleTodoDone(note.id, todoItemIdx);
    this.setState({ note: newNote });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onDeleteFromTodo = (ev,todoIdx) => {
    ev.stopPropagation();
    const newNote=noteService.deleteFromTodo(this.state.note.id, todoIdx);
    this.setState({note:newNote});
  };

  onSaveChanges = (ev) => {
    ev.preventDefault();
    const { note, todo } = this.state;
    const newNote = noteService.editNote(note.id, { todo });
    this.setState({ note: newNote, editToggle: false });
  };

  render() {
    // debugger
    const { note, todo, editToggle } = this.state;
    if (!note) return <React.Fragment></React.Fragment>;
    return (
      <div className="note-content">
        <h2>{note.info.txt}</h2>
        <ul className="todo-list">
          {(note.info.content).map((todo, idx) => {
            return (
              <li
                key={idx}
                className={`${todo.doneAt ? "done" : ""} flex`}
                onClick={() => this.onToggleDone(idx)}
              >
                {todo.txt}
                <button
                  className="delete-from-todo"
                  onClick={(ev) => this.onDeleteFromTodo(ev,idx)}
                >
                  X
                </button>
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
