export class AddNote extends React.Component {
  state = {
    value: "",
    noteType :null
  };

  handleChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  onSubmit=(ev)=>{
    ev.preventDefault();
    const {value,noteType}=this.state
    if(!value||!noteType) return;
  }

  onSetType=(ev,type)=>{
      if(!this.state.value) ev.preventDefault();
      this.setState({noteType:type})
  }

  render() {
    let { value } = this.state;
    return (
      <div className="add-note-container">
        <form onSubmit={this.onSubmit}>
          <input type="text" value={value} onChange={this.handleChange} />
          <button className="btn-add-text-note" onClick={(ev)=>this.onSetType(ev,'txt')}>txt</button>
          <button className="btn-add-img-note" onClick={(ev)=>this.onSetType(ev,'img')}>img</button>
          <button className="btn-add-todo-note" onClick={(ev)=>this.onSetType(ev,'todo')}>todo</button>
          <button className="btn-add-vid-note" onClick={(ev)=>this.onSetType(ev,'vid')}>vid</button>
        </form>
      </div>
    );
  }
}
