const { NavLink } = ReactRouterDOM

export function EmailFolderList(){

    return <div className="email-nav-container">
    <ul>
        <li className="email-nav-item"><NavLink to="">Compose</NavLink></li>
        <li className="email-nav-item"><NavLink to="">Inbox</NavLink></li>
        <li className="email-nav-item"><NavLink to="">Started</NavLink></li>
        <li className="email-nav-item"><NavLink to="">Sent</NavLink></li>
        <li className="email-nav-item"><NavLink to="">Drafts</NavLink></li>
        <li className="email-nav-item"><NavLink to="">Trash</NavLink></li>
    </ul>
</div>
}