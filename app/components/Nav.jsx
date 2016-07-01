var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <a href="#" className="navbar-brand">Brand</a>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <IndexLink to="/">Timer</IndexLink>
          </li>
          <li>
            <Link to="/">Countdown</Link>
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
