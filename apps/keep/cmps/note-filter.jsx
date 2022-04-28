export class NotesFilter extends React.Component{
    state={
        filterBy:{
            search:'',
            type:''
        }
    }

    handleChange=({target})=>{
        this.setState((prevState)=>({filterBy:{...prevState.filterBy,[target.name]:target.value}}))
    }

    render(){
        let {search,type}=this.state.filterBy
        return <section className="filter-container">
            <input type="text" name="search" value={search} placeholder="Search..." onChange={this.handleChange}/>
            <select name="" id="" value={type}>
                <option value="">All</option>
                <option value="text-note">Text</option>
                <option value="img-note">Images</option>
                <option value="todo-note">Todo</option>
                <option value="vid-note">Videos</option>
            </select>
        </section>
    }
}