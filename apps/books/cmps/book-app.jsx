import { bookService } from "../book-service/bookService.js"

import { BookList } from "./book-list.jsx"
import { BookFilter } from "../cmps/book-filter.jsx"
// import { BookDetails } from "../cmps/book-details.jsx"

export class BookApp extends React.Component {

    state={
        books : [],
        filterBy:null,
    }

    componentDidMount(){
       this.loadBooks()
    }

    loadBooks = () =>{
       bookService.query(this.state.filterBy)
            .then((books)=> this.setState({books}))
    }

    onSetFilter = (filterBy) =>{
        this.setState({filterBy:filterBy}, () =>{
            this.loadBooks()
        })
    }

    render() {
       const {books} = this.state
      
        return (
         
            <section className="books">
                <BookFilter onSetFilter={this.onSetFilter} /> 
                <BookList books={books} />
            </section>
        )
    }
}