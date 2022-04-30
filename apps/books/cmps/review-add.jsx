
export class AddReview extends React.Component{

    state ={
        fullName:'',
        bookRate:null,
        readAt:null,
        bookReview:''
    }

    handleChange = ({ target }) =>{
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ( { ...prevState,[field]: value } ))
    }

    render(){
     console.log( this.props)
       return <section className="book-review">
            <form className="review-form" >
                <label htmlFor="full_name">Full name</label>
                <input type="text" id="full_name" name="fullName" onChange={this.handleChange}/>
                <label htmlFor="book">Rate book:</label>
                <select type='number' name="bookRate" id="book" onChange={this.handleChange}>
                    <option type='number' value="1">1</option>
                    <option type='number' value="2">2</option>
                    <option type='number' value="3">3</option>
                    <option type='number' value="4">4</option>
                    <option type='number' value="5">5</option>
                </select>
                <label htmlFor="read_at">read at:</label>
                 <input type="date" id="read_at" name="readAt" onChange={this.handleChange}></input>
                <label htmlFor="book_review">Book review:</label>
                <textarea id="book_review" name="bookReview" rows="4" cols="50" onChange={this.handleChange}>    
                </textarea>
                <button className="submit-btn" onClick={ (ev) => {
                    ev.preventDefault()
                    props.history.goBack()}}>Save review</button>
            </form>
        </section>
    }
}