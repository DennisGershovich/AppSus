import {bookService} from '../book-service/bookService.js'
import { AddReview } from './review-add.jsx'
const {Link,Route} = ReactRouterDOM

export class BookDetails extends React.Component {

    state ={
        book:null
    }

    componentDidMount(){
         this.loadBook()
    }

    componentDidUpdate(prevProps, prevState){
            if (prevProps.match.params.bookId !== this.props.match.params.bookId ) {
            this.loadBook()
        }

    }

    loadBook = () =>{
        const {bookId} = this.props.match.params
        bookService.getById(bookId)
        .then((book) => {
            if(!book) this.props.history.push("/")
            this.setState({book})
        })
    }

    onGoBack = () =>{
        this.props.history.push("/book")
    }

    onRemove = () => {
        const {id} = this.state.book
        bookService.remove(id)
        .then(this.onGoBack)
    }

    render(){
    const { book } = this.state 
    
    if(!book) return <div>Loading..</div>  

    const nextBookId = bookService.getNextBook(book.id)
    return <section className="book-details">
        <div className='details-container'>
        <img className='img-details' src={book.thumbnail} />
        <h1>{book.title}</h1>
        <p>{book.description}</p>
        <button onClick={this.onGoBack}>Back</button>
        <button onClick={this.onRemove}>Remove</button>
        <Link to={`/book/${nextBookId}`}><button onClick={this.onNextPage}>Next</button></Link> 
        <Link to= {`/book/${book.id}/review`} className="add-review-btn" >Add Review</Link>
        <section>
        <Route path={`/book/${book.id}/review`} component={ () => <AddReview  bookId={book.id} />} />
        </section>
        </div>
    </section>
    }
}