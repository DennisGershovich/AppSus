import { EmailList } from "../apps/email/cmps/email-list.jsx"
import {EmailFilter} from "../apps/email/cmps/email-filter.jsx"
import {EmailFolderList} from "../apps/email/cmps/email-folder-list.jsx"
import {emailService} from "../apps/email/services/emailService.js"

export class EmailApp extends React.Component{

    state ={
       emails:[],
       filterBy:null,
       unreadEmails:null
    }
    isSentEmailsOn = false

    componentDidMount(){
        this.loadEmails()
        
    }

    loadEmails =()=>{
        emailService.query(this.state.filterBy)
            .then((emails) => {
                this.setState({emails})
                this.setState((prevState) => ({unreadEmails:emailService.getUnreadEmailsCount(this.state.emails)})) 
            })
    }

    onSetFilter = (filterBy) =>{
        this.setState({filterBy:filterBy}, () =>{
            this.loadEmails()
        })
    }

    updateCountUnreadEmails = (emailId) =>{
        emailService.upDateEmailRead(emailId)
        this.setState({unreadEmails:emailService.getUnreadEmailsCount(this.state.emails)})  
    }

    onSort = (sortBy) =>{
       emailService.sortEmails(sortBy)
        this.loadEmails()
    }

    onShowSentEmails =() =>{
        this.isSentEmailsOn = true
    }

    onCloseSentEmails = () =>{
         this.isSentEmailsOn = false
    }

    onRemoveEmail = (emailId) => {
        emailService.removeEmail(emailId)
        this.loadEmails()
        
    }

    render(){
    const {emails,unreadEmails} = this.state
   
    return<section className="email-app">
        
        <EmailFilter unreadEmails={unreadEmails} onSetFilter={this.onSetFilter} onSort={this.onSort} /> 
        <div className="email-app-main-content">
        <EmailFolderList onShowSentEmails={this.onShowSentEmails} onCloseSentEmails={this.onCloseSentEmails} />
        <EmailList onRead={this.updateCountUnreadEmails} emails={emails} showSent={this.isSentEmailsOn} OnRemoveEmail={this.onRemoveEmail}  /> 
        </div>
    </section>}  
}
