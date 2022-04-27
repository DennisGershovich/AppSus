import { EmailList } from "../apps/email/cmps/email-list.jsx"
import {EmailFilter} from "../apps/email/cmps/email-filter.jsx"
import {EmailFolderList} from "../apps/email/cmps/email-folder-list.jsx"
import {emailService} from "../apps/email/services/emailService.js"
export class EmailApp extends React.Component{

    state ={
       emails:[],
       filterBy:null,

    }

    componentDidMount(){
        this.loadEmails()
    }

    loadEmails =()=>{
        emailService.query(this.state.filterBy)
            .then(emails => this.setState({emails}))
    }

    render(){
    const {emails} = this.state
 
    return<section className="email-app">
        <EmailFilter /> 
        <div className="email-app-main-content">
        <EmailFolderList />
        <EmailList  emails={emails}/> 
        </div>
    </section>}  
}
