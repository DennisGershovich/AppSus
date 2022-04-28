import { noteService } from "../../services/note.service.js";

export class TodoNote extends React.Component{
    state={
        note:this.props.note
    }

    onMarkDone=(todoItemIdx)=>{
        const {note}=this.state
        const newNote=noteService.markTodoDone(note.id,todoItemIdx);
        this.setState({note:newNote});
    }
    render(){
        let {note}=this.state
        if(!note) return <React.Fragment></React.Fragment>
        return <div >
            <h2>{note.info.label}</h2>
            <ul className="todo-list">
            {note.info.todos.map((todo,idx)=>{
                return <li key={idx} className={`${todo.doneAt?'done':''}`} onClick={()=>this.onMarkDone(idx)}>
                    {todo.txt}
                </li>
            })}
            </ul>
        </div>
    }
}