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
        <form className="filter-form" onSubmit={this.onFilter}>
            <input className="email-input-filter" placeholder="Search mail" type='text' name='content' onChange={this.onHandleChange} /> 
            <select className="email-select-filter" name='readState' onChange={this.onHandleChange}>
                <option value="all">All</option>
                <option value='true'>Read</option>
                <option value="false">Unread</option>
            </select>
        </form>
        <div className="sort-btns-container">
        <button className="sort-btn" onClick={ () => this.props.onSort('date')}>Sort by date</button>
        <button className="sort-btn" onClick={ () => this.props.onSort('title')}>Sort by title</button>
        </div>
        <span className="unread-emails-counter">Unread emails: {this.props.unreadEmails} </span>
        </div>
    }
}