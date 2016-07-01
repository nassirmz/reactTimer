var React = require('react');

var Clock = React.createClass({
  formatSeconds: function (totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);
    if(minutes < 10) {
      minutes = '0' + minutes;
    }
    if(seconds < 10) {
      seconds = '0' + seconds;
    }
    return `${minutes}:${seconds}`;
  },
  render: function () {
    return (
      <p>Clock component</p>
    );
  }
});

module.exports = Clock;
