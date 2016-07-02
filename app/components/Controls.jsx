var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },
  render: function () {
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if(countdownStatus ==='started') {
        return <button className="btn btn-secondary-outline">Pause</button>
      }
      if(countdownStatus === 'paused') {
        return <button className="btn btn-secondary-outline">Start</button>
      }
    };
    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="btn btn-danger-outline">Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
