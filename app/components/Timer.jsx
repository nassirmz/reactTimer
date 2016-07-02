var React = require('react');
var Controls = require('Controls');
var Clock = require('Clock');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.timerStatus !==prevState.timerStatus) {
      switch (this.state.timerStatus) {
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
      timerStatus: 'started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({
      timerStatus: newStatus
    });
  },
  render: function () {
    var {count, timerStatus} = this.state;
    return (
      <div className="col-md-3 col-sm-4 count-down">
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls onStatusChange={this.handleStatusChange} countdownStatus={timerStatus}/>
      </div>
    );
  }
});

module.exports = Timer;
