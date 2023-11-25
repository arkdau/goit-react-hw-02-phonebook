import PropTypes from "prop-types";

const ContactList = ({ contacts, removeItem }) => {
  console.log("contacts: ", contacts);
  return (
    <>
      <ul>
        {contacts.map((item) => {
          return (
            <li key={item.id}>
              {item.name}: {item.number}
              <button
                type="button"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      }).isRequired,
    ),
    filter: PropTypes.string,
  }),
};

export default ContactList;
