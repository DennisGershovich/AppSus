import {BookApp} from '../apps/books/cmps/book-app.jsx'
import { BookDetails } from '../apps/books/cmps/book-details.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function BooksApp() {
    return <Router>
    <BookApp />
    </Router>
}
