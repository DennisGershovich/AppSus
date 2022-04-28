export class EmailFilter extends React.Component{
    state ={
        filterBy:{
            content:'',
            readState:''
        }
    }
    onHandleChange = ({target}) =>{
       const value = (target.type === 'number')? +target.value : target.value
       const field = target.name
        this.setState((prevState) =>( {filterBy:{[field]:value}}),() =>{
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
            <select name='readState' onChange={this.onHandleChange}>
                <option value="all">All</option>
                <option value='true'>Read</option>
                <option value="false">Unread</option>
            </select>
        </form>
        <button onClick={ () => this.props.onSort('date')}>Sort by date</button>
        <button onClick={ () => this.props.onSort('title')}>Sort by title</button>
        <span className="unread-emails-counter">Unread emails:{this.props.unreadEmails}</span>
        </div>
    }
}