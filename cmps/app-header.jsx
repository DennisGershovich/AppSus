const { Link, NavLink, withRouter } = ReactRouterDOM;

function _AppHeader() {
  return (
    <header className="app-header">
      <Link to="/" >
        <h2>AppSus</h2>
      </Link>
      <nav>
        <NavLink to="/email">Email</NavLink>
        <NavLink to="/notes">Notes</NavLink>
        <NavLink to="/books">Books</NavLink>
      </nav>
    </header>
  );
}

export const AppHeader = withRouter(_AppHeader);
