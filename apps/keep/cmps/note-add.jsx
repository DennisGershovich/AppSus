import { noteService } from "../services/note.service.js";
const { withRouter } = ReactRouterDOM;

 export class _AddNote extends React.Component {
  state = {
    primaryValue: "",
    placeholder:"Enter text",
    // seconderyValue:"",
    noteType :'txt'

  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value },()=>{});
  };


  onAddFocus=()=>{
    this.props.history.push('/notes/add')
  }

  onSubmit=()=>{
    const {primaryValue,noteType}=this.state
    if(!primaryValue) return;
    console.log(this.state.noteType);
    this.setState({primaryValue: ""})
    noteService.addNote(primaryValue,noteType)
    .then(this.props.history.push('/notes'))
  }

  onSetType=(ev,type)=>{
      if(!this.state.primaryValue) ev.preventDefault();
      this.setState({primaryValue: "",noteType:type})
      if(type==='img') this.setState({placeholder:'Enter img url'})
      if(type==='txt') this.setState({placeholder:'Enter text'})
      if(type==='todo') this.setState({placeholder:'Enter todo title'})
      if(type==='vid') this.setState({placeholder:'Enter youtube url'})
  }

  render() {
    let { primaryValue,placeholder, } = this.state;
    return (
      <div className="add-note-container">
          <input type="text" name="primaryValue" value={primaryValue} placeholder={placeholder} onClick={this.onAddFocus} onChange={this.handleChange} />
          {/* {(noteType==='todo'||noteType==='img')&&<input type="text" name="seconderyValue" value={seconderyValue} onChange={this.handleChange}></input>} */}
          <img src="assets\img\keep\add-note.png" onClick={this.onSubmit} alt="" />
          {/* <button className="add-note" onClick={this.onSubmit}>+</button> */}

          <div className="add-note-controls">
            <img src="assets\img\keep\image.png" className="add-img-note" onClick={(ev)=>this.onSetType(ev,'img')} alt="" />
            <img src="assets\img\keep\text.png" className="add-text-note" onClick={(ev)=>this.onSetType(ev,'txt')} alt="" />
            <img src="assets\img\keep\to-do-list.png" className="add-todo-note" onClick={(ev)=>this.onSetType(ev,'todo')} alt="" />
            <img src="assets\img\keep\movie-player.png" className="add-vid-note" onClick={(ev)=>this.onSetType(ev,'vid')} alt="" />
          {/* <button className="btn-add-text-note" onClick={(ev)=>this.onSetType(ev,'txt')}>txt </button>
          <button className="btn-add-img-note" onClick={(ev)=>this.onSetType(ev,'img')}>img </button>
          <button className="btn-add-todo-note" onClick={(ev)=>this.onSetType(ev,'todo')}>todo </button>
          <button className="btn-add-vid-note" onClick={(ev)=>this.onSetType(ev,'vid')}>vid </button> */}
          </div>
      </div>
    );
  }
}

export const AddNote = withRouter(_AddNote);