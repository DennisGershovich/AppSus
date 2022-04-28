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
        const {onSetFilter}=this.props
        return <section className="filter-container flex">
            <input type="text" name="search" value={search} placeholder="Search..." onChange={this.handleChange}/>
            <select name="type" value={type} onChange={this.handleChange}>
                <option value="">All</option>
                <option value="note-txt">Text</option>
                <option value="note-img">Images</option>
                <option value="note-todos">Todo</option>
                <option value="note-vid">Videos</option>
            </select>
            <img src="assets\img\keep\go.png" alt="" onClick={()=>onSetFilter(this.state.filterBy)}/>
        </section>
    }
}