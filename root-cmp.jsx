
import { AppHeader } from './cmps/app-header.jsx'
import { AppFooter } from './cmps/app-footer.jsx'
import { Home } from './pages/app-home.jsx'
import {  EmailApp } from './pages/app-mail.jsx'
import {Notes} from './pages/app-notes.jsx'
import { BooksApp } from './pages/app-books.jsx'
import {EmailDetails} from './apps/email/cmps/email-details.jsx'
import { BookDetails } from './apps/books/cmps/book-details.jsx'
import { Compose } from './apps/email/cmps/email-compose.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
    return <Router>
       <AppHeader /> 
        <main className="app">
            <Switch>
            <Route path="/email/compose" component={Compose} /> 
            <Route path="/email/:emailId" component={EmailDetails}/>
            <Route path="/email" component={EmailApp}/>
            <Route path="/notes" component={Notes}/>
            <Route path="/book/:bookId" component={BookDetails} />
            <Route path="/books" component={BooksApp}/>
            <Route path="/" component={Home}/>
            </Switch>
        </main>
        <AppFooter />
    </Router>
}
