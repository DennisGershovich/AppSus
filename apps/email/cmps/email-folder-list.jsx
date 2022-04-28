const {Route,NavLink,Switch } = ReactRouterDOM

export function EmailFolderList(){

    return <div className="email-nav-container">
    <ul>
        <li className="email-nav-item"><NavLink to="/email/compose">Compose</NavLink></li>
        <li className="email-nav-item"><NavLink >Inbox</NavLink></li>
        <li className="email-nav-item"><NavLink >Started</NavLink></li>
        <li className="email-nav-item"><NavLink >Sent</NavLink></li>
        <li className="email-nav-item"><NavLink >Drafts</NavLink></li>
        <li className="email-nav-item"><NavLink >Trash</NavLink></li>
    </ul>
</div>
}


