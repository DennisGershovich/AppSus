import {emailService} from "../services/emailService.js"

export function EmailDetails (props){

    const email = emailService.getEmail(props.match.params.emailId)
    return <section className="email-details">
        <div className="email-details-container">
        <div className="email-subject">
            <div onClick={() => props.history.goBack()}>
                <i className="btn-details fas fa-arrow-left mr-5" ></i>
            </div>
            <div>
                {email.subject}
            </div>
            <div onClick={ () =>Remove(email.id,props) }>
                <i className=" fas fa-trash-alt"></i>  
            </div>
        </div>
           <div className="email-sender">
               {email.sender}
           </div>
           <div className="email">
              <p className="email-adress">{email.to}</p> 
           </div>
           <div className="email-content">
               {email.body}
           </div>
        </div>
    </section>  
}

function Remove(emailId,props){
    emailService.removeEmail(emailId)
    props.history.goBack()
}