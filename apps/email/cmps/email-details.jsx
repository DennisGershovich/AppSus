import {emailService} from "../services/emailService.js"

export function EmailDetails (props){

    const email = emailService.getEmail(props.match.params.emailId)
    return <section className="email-details">
        <div className="email-details-container">
           <div className="email-subject">
               {email.subject}
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