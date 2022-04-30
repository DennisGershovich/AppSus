const {Link} = ReactRouterDOM

export function BookPreview ({book}){
    
    return <Link to={`/book/${book.id}`}>
    <div className="book-preview" >
    <img className="book-img" src={book.thumbnail}></img>
    <h3 className="book-title-preview">book: {book.title}</h3>  
    <h3 className="book-price-preview"> price: {book.listPrice.amount}</h3>
    </div>
    </Link>
}