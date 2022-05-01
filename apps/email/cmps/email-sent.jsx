import {emailService} from '../services/emailService.js'

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
       {this.state.sentEmails.map(email => {return <li key={email.key}  className='email-preview read flex space-between' >
           <p> To:{email.to}</p>
           <p>{email.subject}</p>
           <p> {email.sentAt}</p>
           <button onClick={ () => this.onRemoveSentEmail(email.id)}> delete</button>
       </li>})}
       
    </div>
    }
}


