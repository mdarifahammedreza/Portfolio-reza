import PropTypes from "prop-types";
const Radial = ({ value = 0 }) => {
  return (
    <div
      className="radial-progress "
      style={{ "--value": value }}
      role="progressbar">
      {value}%
    </div>
  );
};

export default Radial;

Radial.propTypes = {
  value: PropTypes.number.isRequired,
};
