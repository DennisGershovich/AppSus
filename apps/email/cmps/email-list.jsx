import { EmailPreview } from "./email-preview.jsx"
import {SentEmails} from './email-sent.jsx'

export function EmailList ({emails,onRead,showSent,OnRemoveEmail}){
    return <div className="email-list-container" >
        <h1 className="list-title">{(!showSent)?'Inbox':'Sent emails'}</h1>
        {!showSent && emails.map(email =>< EmailPreview onRead={onRead} email={email} key={email.id} OnRemoveEmail={OnRemoveEmail} /> )}
        {showSent && <SentEmails onRead={onRead}/>}
    </div> 
}