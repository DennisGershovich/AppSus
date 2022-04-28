
export class Compose extends React.Component{
    render(){
        return<section className="compose-section">
        <div className="compose-container">
        <div className="new-message">
            <p>new message</p>
        </div>

        <div className="message-to">
            <p>to</p>
        </div>

        <div className="message-subject">
            <p>subject</p>
        </div>
        <div className="message-content">
            <p>text area</p>
        </div>
        <div className="compose-btns">
            <button>
                send
            </button>
            <i className=" fas fa-trash-alt"></i>
        </div>
        </div>
    </section>  
    }
}