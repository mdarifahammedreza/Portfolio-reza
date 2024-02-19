import PropTypes from "prop-types";
const LinearPrograss = ({ value }) => {
  return (
    <div>
      <progress className="progress " value={value} max="100"></progress>
      <p className="text-sm">{value}%</p>
    </div>
  );
};

export default LinearPrograss;
LinearPrograss.propTypes = {
  value: PropTypes.number.isRequired,
};
