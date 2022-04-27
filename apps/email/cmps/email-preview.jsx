const { Link } = ReactRouterDOM

export function EmailPreview ({email}){
    return <Link className="email-link" to={`/email/${email.id}`} >
    <li className=" email-preview flex " >
            <i className="star fas fa-star mr-5 ml-5 "></i>
            <div className="email-sender">
                {email.sender}
            </div>
            <div className="email-content">
                {email.subject}
                {email.body}   
            </div>
            <div className="email-date">
                {email.sentAt}
            </div>
            <i className=" fas fa-trash-alt"></i>
        </li>
   </Link>
}