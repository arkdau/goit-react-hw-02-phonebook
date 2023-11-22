import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

class App extends Component {

  state = {
    contacts: [],
    filter: "",
  };

  onAddItem = (name, number) => {
    this.setState((state) => {

      let contacts = [...this.state.contacts, {
        name: name,
        id: nanoid(),
        number: number,
      }];
      console.log("add item-contacts:", contacts);

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
        <h1>Phonebook</h1>
        <ContactForm addItem={this.onAddItem} />
        <h1>Contacts</h1>
        <Filter onChange={this.handleChangeInput} />
        <ContactList  State={this.state}/>
      </>
    );
  }
}

export default App;
