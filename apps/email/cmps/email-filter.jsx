export class EmailFilter extends React.Component{
    state ={
        filterBy:{
            content:'',
            read:''
        }
    }
    onHandleChange = ({target}) =>{
       const value = (target.type === 'number')? +target.value : target.value
       const field = target.name
        this.setState((prevState) =>( {filterBy:{ ...prevState.filterBy,[field]:value}}),() =>{
            this.props.onSetFilter(this.state.filterBy)
        } )
   }

    onFilter = (ev) =>{
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }
   
    render(){
        return <div className="email-filter">
        <button className="email-nav-btn">|||</button>   
        <form onSubmit={this.onFilter}>
            <input className="email-input-filter" type='text' name='content' onChange={this.onHandleChange} /> 
            <select name='read-state' onChange={this.onHandleChange}>
                <option value="all">All</option>
                <option value="read">Read</option>
                <option value="unread">Unread</option>
            </select>
        </form>
        <span className="unread-emails-counter">Unread emails:{this.props.unreadEmails}</span>
        </div>
    }
}