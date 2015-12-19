var React = require('react');

var DateFilter = React.createClass({

  render: function() {
    this.label = "Date";

    if (this.props.toggle === this.label) {
      var hiddenClass = "";
    } else {
      var hiddenClass = "hidden-dropdown";
    }

    return (
      <div>
        <div onClick={this.props.onClick}>
          {this.label}
        </div>
        <div id="date-dropdown" className={hiddenClass}>
          <div>
            This Week
          </div>
          <div>
            This Month
          </div>
          <div>
            This Year
          </div>
        </div>
      </div>
    );
  }

});

module.exports = DateFilter;
