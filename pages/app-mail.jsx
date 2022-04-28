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

    render(){
    const {emails,unreadEmails} = this.state

    return<section className="email-app">
        <EmailFilter unreadEmails={unreadEmails} onSetFilter={this.onSetFilter}  /> 
        <div className="email-app-main-content">
        <EmailFolderList />
        <EmailList onRead={this.updateCountUnreadEmails} emails={emails}/> 
        </div>
    </section>}  
}
