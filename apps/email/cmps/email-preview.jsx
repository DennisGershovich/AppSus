
import {emailService} from '../services/emailService.js'
import { ReadMore } from './email-read-more.jsx'

export class EmailPreview extends React.Component{
    state ={
        isReadMore:false
    }

    onChangeReadMore = () =>{
        this.setState({ isReadMore: !this.state.isReadMore})
    }
    // <Link   className="email-link " to={`/email/${email.id}`} >
render() {
    const {email} = this.props
    console.log(this.props)
  return<div>
   <li className={email.isRead?'email-preview read flex':'email-preview flex'}>
            <i className="star fas fa-star mr-5 ml-5 "></i>
            <div className="email-sender">
                {email.sender}
            </div>
            <div className="email-content">
              <p className='email-subject'>{email.subject}</p>  
               <p className='email-content'> {email.body} </p>
               <button onClick={() => this.onChangeReadMore() }> {(this.state.isReadMore)?'read less':'read more.. '}</button>
            </div>
            <div className="email-date">
                {emailService.convertToDate( email.sentAt )}
            </div>
        </li>
       { this.state.isReadMore && <ReadMore  email={email} onRead={this.props.onRead}  />}
       </div> }
  // </Link>
}



//onClick={() => onRead(email.id)}