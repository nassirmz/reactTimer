var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  render: function () {
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if(countdownStatus ==='started') {
        return <button type="button" className="btn btn-primary-outline" onClick={this.onStatusChange('paused')}>Pause</button>
      } else {
        return <button type="button" className="btn btn-primary-outline" onClick={this.onStatusChange('started')}>Start</button>
      }
    };
    return (
      <div className="controls">
        {renderStartStopButton()}
        <button type="button" className="btn clear" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
