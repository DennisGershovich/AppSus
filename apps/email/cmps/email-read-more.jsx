const { Link } = ReactRouterDOM
// import {emailService} from "../services/emailService.js"

export function ReadMore({email}){
    
    return<div className='read-more-container'>
        <h3>{email.subject}</h3>
        <h3>from:{email.sender}</h3>
        <h4>email:{email.to}</h4>
        <p>{email.body}</p>
        <div className="read-more-links-container">
        <Link  className="take-to-email-details-btn" to={`/email/${email.id}`}> <i className="fas fa-expand icon" ></i> </Link>
        <Link to={`/notes?emailId=${email.id}`}  ><i className="note-pin fas fa-thumbtack icon"  title="Save as note"></i> </Link> 
        </div>
    </div>
}
