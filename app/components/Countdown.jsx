var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0
    };
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds
    })
  },
  render: function () {
    var {count} = this.state;
    return (
      <div className="col-md-4 col-md-offset-4">
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountDown={this.handleSetCountdown} />
      </div>
    );
  }
});

module.exports = Countdown;
