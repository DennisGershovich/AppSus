import { noteService } from "../../services/note.service.js";

export class TextNote extends React.Component {
  state = {
    text: this.props.note.info.txt,
    editToggle:false,
    value:''
  };

  toggleEdit=()=>{
    this.setState({editToggle:!this.state.editToggle})
  }

  handleChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  onSaveChanges = () => {
    const {note}=this.props
    noteService.editNote(note.id,{txt:this.state.value})
  };

  render() {
    let { note } = this.props;
    let {value,editToggle}=this.state
    if (!note) return <React.Fragment></React.Fragment>;
    return (
      <div>
        {/* <input
          name="text-note-input"
          type="textarea"
          value={this.state.text}
          onChange={(ev) => this.handleChange(ev)}
        />
        <button onClick={this.onSaveChanges}>save changes</button> */}
        <h1>{note.info.txt}</h1>
        {editToggle&&(<form onSubmit={this.onSaveChanges}>
          <input type="text" value={value} onChange={this.handleChange}/>
        <button>save</button>
        </form>
        )}
        <button onClick={this.toggleEdit}>Edit</button>
      </div>
    );
  }
}
