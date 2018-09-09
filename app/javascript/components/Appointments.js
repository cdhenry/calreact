import React from "react"
import PropTypes from "prop-types"
class Appointments extends React.Component {
  render () {
    return (
      <React.Fragment>
        Title: {this.props.title}
        Appt Time: {this.props.apptTime}
      </React.Fragment>
    );
  }
}

Appointments.propTypes = {
  title: PropTypes.string,
  apptTime: PropTypes.node
};
export default Appointments
