import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar is-black is-fixed-top navbar-height-5">
        <h1>My Portfolio</h1>
        <Link to="/">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
      </nav>
    </header>
  );
}
