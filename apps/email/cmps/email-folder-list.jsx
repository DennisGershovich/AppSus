const {Route,NavLink,Switch } = ReactRouterDOM

export function EmailFolderList(props){

    return <div className="email-nav-container">
    <ul className="email-nav">
        <li className="email-nav-item"><NavLink to="/email/compose">Compose</NavLink></li>
        <li className="email-nav-item" onClick={props.onCloseSentEmails}><NavLink to="/email" >Inbox</NavLink></li>
        {/* <li className="email-nav-item" onClick={props.showStarred}><NavLink to="/email/starred">Started</NavLink></li>  */}
        <li className="email-nav-item" onClick={props.onShowSentEmails}><NavLink >Sent</NavLink></li> 
        {/* <li className="email-nav-item"><NavLink >Drafts</NavLink></li> */} 
        {/* <li className="email-nav-item"><NavLink >Trash</NavLink></li> */}
    </ul>
</div>
}


