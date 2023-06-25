import PropTypes from 'prop-types';

export const Filter = ({ handleChange, filter }) => {
  return (
    <input
      onChange={handleChange}
      value={filter}
      type="text"
      name="filter"
      placeholder="Search by Name / Phone"
      title="Search contacts by NAME and PHONE_NUMBER"
      required
    />
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
