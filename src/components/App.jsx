import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";

/**
 * @typedef {[]} NewType
 */

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: "",
  };

// state = {
//   contacts: [],
//   filter: ''
// }

  // handleSubmit = (evt) => {
  //   evt.preventDefault();
  //
  //   const form = evt.currentTarget;
  //   console.log("form: ", form);
  //   const name = form.elements.name.value;
  //   const number = form.elements.number.value;
  //
  //   console.log("name: ", name);
  //
  //   this.setState({
  //     name: name,
  //     number: number,
  //   });
  //
  //   this.onAddItem();
  //
  //   console.log("state.name: ", this.state.name);
  //
  //   form.reset();
  // };

  // onAddItem = () => {
  //   this.setState((state) => {
  //     // const contacts = state.contacts.concat(state.name);
  //     let contacts = [...this.state.contacts, {
  //       name: this.state.name,
  //       id: nanoid(),
  //       number: this.state.number,
  //     }];
  //     console.log("add item-contacts:", contacts);
  //     // contacts = [...state.contacts, nanoid()]
  //
  //     // contacts = state.contacts.concat(state.id);
  //
  //     return {
  //       contacts,
  //       name: "",
  //     };
  //   });
  // };

  onAddItem = (name, number) => {
    this.setState((state) => {
      // const contacts = state.contacts.concat(state.name);
      let contacts = [...this.state.contacts, {
        name: name,
        id: nanoid(),
        number: number,
      }];
      console.log("add item-contacts:", contacts);
      // contacts = [...state.contacts, nanoid()]

      // contacts = state.contacts.concat(state.id);

      return {
        contacts,
        name: "",
      };
    });
  };

  handleChangeInput = (evt) => {
    evt.preventDefault();
    const filter = evt.currentTarget.value;
    this.setState({ filter: filter });
    console.log("find: ", filter);
  };

  render() {
    return (
      <>
        {/*<form onSubmit={this.handleSubmit}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>*/}
        <h1>Phonebook</h1>
        <ContactForm addItem={this.onAddItem} />
        <h1>Contacts</h1>
        <p>Find contacts by name</p>
        <input type="text" name="find" onChange={this.handleChangeInput} />
        <ul>
          {this.state.contacts.filter((item) =>
            item.name.includes(this.state.filter)
          ).map((filteredName) => (
            <li key={filteredName.id}>
              {filteredName.name}: {filteredName.number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
