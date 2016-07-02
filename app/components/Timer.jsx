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
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus !==prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
        this.startTimer();
        break;
        case 'stopped':
        this.setState({count: 0});
        case 'paused':
        clearInterval(this.timer);
        this.timer = undefined;
        break;
      }
    }
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
