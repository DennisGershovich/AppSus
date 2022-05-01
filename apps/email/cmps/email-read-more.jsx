const { Link } = ReactRouterDOM

export function ReadMore({email,OnRemoveEmail}){

    return<div className='read-more-container'>
        <h3>{email.subject}</h3>
        <h3>from:{email.sender}</h3>
        <h4>email:{email.to}</h4>
        <p>{email.body}</p>
        <div className="read-more-links-container">
        <Link  className="take-to-email-details-btn" to={`/email/${email.id}`}> <i className="fas fa-expand icon" title='expand'></i> </Link>
        <Link to={`/notes?emailId=${email.id}`}  ><i className="note-pin fas fa-thumbtack icon"  title="Save as note"></i> </Link> 
        <button className="remove-btn" onClick={() => OnRemoveEmail(email.id)}> <i className=" remove-btn fas fa-trash-alt"></i>   </button>
        </div>
    </div>
}
