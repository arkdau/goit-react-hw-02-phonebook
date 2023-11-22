// import { Component } from "react";

const ContactList = ({ State }) => {
  // console.log('List-state: ', Contacts);
  return (
    <>
      <ul>
        {console.log('Contacts: ', State)}
        {State.contacts.filter((item) => item.name.includes(State.filter)).map((
          filteredName,
        ) => (
          <li key={filteredName.id}>
            {filteredName.name}: {filteredName.number}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
