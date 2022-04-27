import { EmailList } from "../apps/email/cmps/email-list.jsx"
import {EmailFilter} from "../apps/email/cmps/email-filter.jsx"
import {EmailFolderList} from "../apps/email/cmps/email-folder-list.jsx"

export class EmailApp extends React.Component{

    state ={
       
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
