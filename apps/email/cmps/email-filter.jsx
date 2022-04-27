export class EmailFilter extends React.Component{

    render(){
        return <div className="email-filter">
        <button className="email-nav-btn">|||</button>   
        <form>
            <input type='text' /> 
            <select>
                <option value="all">All</option>
                <option value="all">Read</option>
                <option value="all">Unread</option>
            </select>
        </form>
        </div>
    }
}