import { EmailPreview } from "./email-preview.jsx"
import {SentEmails} from './email-sent.jsx'



export function EmailList ({emails,onRead,showSent}){
  
    return <div className="email-list-container" >
        {!showSent && emails.map(email => <EmailPreview onRead={onRead} email={email} key={email.id}/> )}
        {showSent && <SentEmails onRead={onRead}/>}
    </div> 
}