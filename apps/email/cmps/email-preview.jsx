const { Link } = ReactRouterDOM

export function EmailPreview ({email,onRead}){

    return <Link onClick={() => onRead(email.id)}  className="email-link " to={`/email/${email.id}`} >
         
    <li className={email.isRead?'email-preview read flex':'email-preview flex'}>
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
        </li>
   </Link>
}