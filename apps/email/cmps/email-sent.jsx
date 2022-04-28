import {emailService} from '../services/emailService.js'
import {EmailPreview} from './email-preview.jsx'

export function SentEmails (onRead){
    let sentEmails = emailService.getSentEmails()
    return <div>
       {sentEmails.map(email => {return <li className='email-preview read flex space-between'>
           {email.to}
           {email.subject}
           {email.body}
           {email.sentAt}
       </li>})}
       
    </div>
}


