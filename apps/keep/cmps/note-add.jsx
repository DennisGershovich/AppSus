import { noteService } from "../services/note.service.js";
const { withRouter } = ReactRouterDOM;

 export class _AddNote extends React.Component {
  state = {
    primaryValue: "",
    seconderyValue:"",
    noteType :null

  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value },()=>{});
  };

  onSubmit=()=>{
    const {primaryValue,noteType}=this.state
    if(!primaryValue||!noteType) return;
    console.log(this.state.noteType);
    noteService.addNote(this.state)
    .then(this.props.history.push('/notes'))
  }

  onSetType=(ev,type)=>{
      if(!this.state.primaryValue) ev.preventDefault();
      this.setState({noteType:type})
  }

  render() {
    let { primaryValue,seconderyValue,noteType } = this.state;
    return (
      <div className="add-note-container">
          <input type="text" name="primaryValue" value={primaryValue} onChange={this.handleChange} />
          {(noteType==='todo'||noteType==='img')&&<input type="text" name="seconderyValue" value={seconderyValue} onChange={this.handleChange}></input>}
          <button onClick={this.onSubmit}>+</button>

          <div className="add-note-controls">
          <button className="btn-add-text-note" onClick={(ev)=>this.onSetType(ev,'txt')}>txt </button>
          <button className="btn-add-img-note" onClick={(ev)=>this.onSetType(ev,'img')}>img </button>
          <button className="btn-add-todo-note" onClick={(ev)=>this.onSetType(ev,'todo')}>todo </button>
          <button className="btn-add-vid-note" onClick={(ev)=>this.onSetType(ev,'vid')}>vid </button>
          </div>
      </div>
    );
  }
}

export const AddNote = withRouter(_AddNote);