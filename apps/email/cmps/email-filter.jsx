export class EmailFilter extends React.Component{
   
    render(){
        return <div className="email-filter">
        <button className="email-nav-btn">|||</button>   
        <form>
            <input className="email-input-filter" type='text' /> 
            <select>
                <option value="all">All</option>
                <option value="all">Read</option>
                <option value="all">Unread</option>
            </select>
        </form>
        <span className="unread-emails-counter">Unread emails:{this.props.unreadEmails}</span>
        </div>
    }
}