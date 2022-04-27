export class TextNote extends React.Component{
    state={
        note:this.props.note
    }
    render(){
        // debugger
        console.log('from the text note ',this.props);
        let {note}=this.state
        if(!note)return <React.Fragment></React.Fragment>
        return <div>
            {note.info.txt}
        </div>
    }
}