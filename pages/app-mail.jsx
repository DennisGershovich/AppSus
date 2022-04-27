import { EmailList } from "../apps/email/cmps/email-list.jsx"
import {EmailFilter} from "../apps/email/cmps/email-filter.jsx"
import {EmailFolderList} from "../apps/email/cmps/email-folder-list.jsx"

export class EmailApp extends React.Component{

    state ={
       emails:[],
       filterBy:null
    }

    componentDidMount(){
        //load emails on mount
    }

    loadEmails =()=>{
        //get emails from service
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
