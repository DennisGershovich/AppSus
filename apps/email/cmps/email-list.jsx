import { EmailPreview } from "./email-preview.jsx"

export function EmailList ({emails,onRead}){
 
    return <div className="email-list-container" >
        {emails.map(email => <EmailPreview onRead={onRead} email={email} key={email.id}/> )}
    </div> 
}