export class TodoNote extends React.Component{
    state={
        note:this.props.note
    }
    render(){
        let {note}=this.state
        if(!note) return <React.Fragment></React.Fragment>
        return <div >
            {note.info.label}
            <ul className="todo-list">
            {note.info.todos.map((todo,idx)=>{
                return <li key={idx} className={`${todo.doneAt?'done':''}`}>
                    {todo.txt}
                </li>
            })}
            </ul>
        </div>
    }
}