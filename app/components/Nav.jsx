var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="navbar-header">
          <a href="#" className="navbar-brand">REACT TIMER APP</a>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>Created by <a href="http://github.com/nassirmz" target="_blank">Nassir Zeinu</a></li>
        </ul>
      </nav>
    </div>
  )
}

module.exports = Nav;
