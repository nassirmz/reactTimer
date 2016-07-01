var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;
    if(strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = "";
      this.props.onSetCountDown(parseInt(strSeconds, 10));
    }
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} classNams="count-down-form">
          <input className="form-control" type="text" ref="seconds" placeholder="Enter time in seconds" />
          <button className="btn btn-primary btn-lg btn-block">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
