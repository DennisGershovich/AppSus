
import {emailService} from '../services/emailService.js'
import { ReadMore } from './email-read-more.jsx'

export class EmailPreview extends React.Component{
    state ={
        isReadMore:false,
        emailContentForPreview:'',
        isStarred:null
    }

    componentDidMount(){
        let emailBody = emailService.trimEmailBodyMessage(this.props.email.body)
        let emailStar = emailService.getEmail(this.props.email.id)
        this.setState({emailContentForPreview:emailBody,isStarred:emailStar.isStarred})
    }


    onChangeReadMore = () =>{
        this.setState({ isReadMore: !this.state.isReadMore})
    }

    onChangeStar = (email) => {
        emailService.starEmail(email)
        let emailStar = emailService.getEmail(this.props.email.id)
        this.setState({isStarred:emailStar.isStarred})
    }

    starClassName = "star fas fa-star mr-5 ml-5 "
render() {
    const {email} = this.props
  return<div>
   <li className={email.isRead?'email-preview read flex':'email-preview flex'}>
            <i onClick={() => this.onChangeStar(email)} className={((this.state.isStarred) ? this.starClassName + 'active': this.starClassName )}></i>
            <div className="email-sender">
                {email.sender}
            </div>
            <div className="email-content">
              <p className='email-subject'>{email.subject}</p>  
               <p className='email-content-body'> {this.state.emailContentForPreview} </p>
               <button className="read-more-btn" onClick={() => this.onChangeReadMore() }> {(this.state.isReadMore)?'read less':'read more.. '}</button>
            </div>
            <div className="email-date">
                {emailService.convertToDate( email.sentAt )}
            </div>
        </li>
       { this.state.isReadMore && <ReadMore OnRemoveEmail={this.props.OnRemoveEmail}  email={email} onRead={this.props.onRead}  />}
    </div> }

}



