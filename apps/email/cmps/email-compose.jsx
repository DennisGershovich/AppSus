import {emailService} from '../services/emailService.js'

export class Compose extends React.Component{
    state ={
        to:'',
        subject:'',
        content:'',
        isSent:false
    }

    onSendEmail = () =>{
        if(this.state.to === '') return
        this.setState({isSent:true})
        const {to,subject,content} = this.state 
        emailService.saveEmail(to,subject,content)
        setTimeout(() => {
            this.props.history.goBack()
        }, 500);
        
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ ...prevState,[field]: value }))
    }

    render(){
        const {to,subject,content,isSent} = this.state
        return<section className="compose-section">
        <div className="compose-container">
        <div className="new-message">
            <p>new message</p>
        </div>

        <div className="message-to">
            <input type="text" className="input" placeholder="to" name="to" value={to} onChange={this.handleChange}/ >
        </div>

        <div className="message-subject">
           <input type="text" className="input" placeholder="subject" name="subject" value={subject} onChange={this.handleChange}/>
        </div>
        <div className="message-content">
          <textarea className="compose-text-area" name="content" value={content} onChange={this.handleChange}>

          </textarea>
        </div>
        <div className="compose-btns">
            <button onClick={this.onSendEmail}>
                send
            </button>
            <i className=" fas fa-trash-alt" onClick={() => this.props.history.goBack()}></i>
        </div>
        </div>
        { isSent && <SentModal />}
    </section> 
    }
}

function SentModal(){
    return <div className="sent-modal">
        <p>Email sent</p>
    </div>
}