
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

export default ContactList;
