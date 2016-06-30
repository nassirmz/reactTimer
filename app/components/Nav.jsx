var React = require('react');
var {Link, indexLink} = require('react-router');

var Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Timer App
          </li>
          <li>
            <indexLink to="/" activeClassName="active-link">
              Timer
            </indexLink>
          </li>
          <li>
            <Link to="/" activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="http://github.com/nassirmz" target="_blank">Nassir Zeinu</a>
          </li>
        </ul>
      </div>

    </div>
  )
}

module.exports = Nav;
