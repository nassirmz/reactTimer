var React = require('react');
var Controls = require('Controls');
var Clock = require('Clock');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'paused'
    };
  },
  startTimer: function () {
    this.timer = setInterval (() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  },
  render: function () {
    var {count, countdownStatus} = this.state;
    return (
      <div className="col-sm-3 count-down">
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count}/>
        <Controls onStatusChange={this.handleStatusChange} countdownStatus={countdownStatus}/>
      </div>
    );
  }
});

module.exports = Timer;
