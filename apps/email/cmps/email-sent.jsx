import {emailService} from '../services/emailService.js'
import {EmailPreview} from './email-preview.jsx'

export class SentEmails extends React.Component{

    state ={
        sentEmails:null
    }

    componentDidMount(){
        this.setState({sentEmails:emailService.getSentEmails()})
    }

    onRemoveSentEmail = (emailId) =>{
        emailService.removeSentEmailFromStorage(emailId)
        this.setState({sentEmails:emailService.getSentEmails()})
    }
  
    render(){
     if(!this.state.sentEmails)return <div>no sent emails</div>
     return <div>
       {this.state.sentEmails.map(email => {return <li  className='email-preview read flex space-between' key={email.key}>
           <p> To:{email.to}</p>
           <p>{email.subject}</p>
           {/* <p>{email.body}</p> */}
           <p> {email.sentAt}</p>
           <button onClick={ () => this.onRemoveSentEmail(email.id)}> delete</button>
       </li>})}
       
    </div>
    }
}



// export function SentEmails (onRead){
//     let sentEmails = emailService.getSentEmails()
//     if(!sentEmails)return <div>no sent emails</div>
//     return <div>
//        {sentEmails.map(email => {return <li key={email.key} className='email-preview read flex space-between'>
//            <p> To:{email.to}</p>
//            <p>{email.subject}</p>
//            {/* <p>{email.body}</p> */}
//            <p> {email.sentAt}</p>
//            <button onClick={() => forceUpdate() }> delete</button>
//        </li>})}
       
//     </div>
// }

