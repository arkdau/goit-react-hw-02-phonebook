import PropTypes from 'prop-types';

const ContactList = ({ State, removeItem }) => {
  return (
    <>
      <ul>
        {State.contacts.filter((item) => item.name.includes(State.filter)).map((
          filteredName, index
        ) => (
          <li key={filteredName.id}>
            {filteredName.name}: {filteredName.number}
            <button
              type="button"
              onClick={() => removeItem(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};



ContactList.propTypes = {
  State: PropTypes.shape({
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired,
  ),
  filter: PropTypes.string,
  })
};

export default ContactList;
