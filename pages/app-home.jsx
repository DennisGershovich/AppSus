const { Link } = ReactRouterDOM

export function Home() {

    return<div className="dark-overlay"> 
        <div className="landing-inner">
          <h1 className="x-large">Welcome to AppSus</h1>
          <p className="lead">
              Welcome to AppSus application!
          </p>
          <div className="buttons">
            <Link to="/email" className="landing-btn"> 
                <span> Email</span>
                <i className="fas fa-envelope email" > </i> 
            </Link>
            <Link to="/notes" className="landing-btn">
                 <span> Notes</span>
                <i className="far fa-sticky-note note" ></i>
            </Link>
          </div>
        </div>    
      </div>
}