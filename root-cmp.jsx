
import { AppHeader } from './cmps/app-header.jsx'
import { AppFooter } from './cmps/app-footer.jsx'
import { Home } from './pages/app-home.jsx'
import { Mail } from './pages/app-mail.jsx'
import {Notes} from './pages/app-notes.jsx'
import { Books } from './pages/app-books.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
    return <Router>
       <AppHeader /> 
        <main className="app">
            <Switch>
            <Route path="/email" component={Mail}/>
            <Route path="/notes" component={Notes}/>
            <Route path="/books" component={Books}/>
            <Route path="/" component={Home}/>
            </Switch>
        </main>
        <AppFooter />
    </Router>
}
