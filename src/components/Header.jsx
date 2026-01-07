import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/countdown">Countdown</Link>
        <Link to="/to-do-list">To Do List</Link>
        <Link to="/weather">Weather</Link>
        <Link to="/virtual-postcard">Send A Postcard</Link>
      </nav>
    </header>
  );
}

export default Header;