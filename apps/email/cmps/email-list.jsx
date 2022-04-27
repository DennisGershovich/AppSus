import { EmailPreview } from "./email-preview.jsx"

export function EmailList ({emails}){
 
    return <div className="email-list-container" >
        {emails.map(email => <EmailPreview email={email} key={email.id}/> )}
    </div> 
}