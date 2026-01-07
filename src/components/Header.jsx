import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/countdown">Countdown</Link>
        <Link to="/to-do-list">To Do List</Link>
        <Link to="/weather">Weather</Link>
        <Link to="/virtual-postcard">Send A Postcard</Link>
      </header>
    </>
  );
}

export default Header;
