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
    if (this.checkItem(name).length === 0) {
      this.setState(() => {
        let contacts = [...this.state.contacts, {
          name: name,
          id: nanoid(),
          number: number,
        }];

        return {
          contacts,
          name: "",
        };
      });
      return false;
    } else {
      return true;
    }
  };

onRemoveItem = (i) => {
  this.setState(() => {
    const contacts = this.state.contacts.filter((item, j) => i !== j);

    return {
      contacts,
    };
  });
};

  checkItem = (name) => {
    return this.state.contacts.filter((item) => item.name.includes(name));
  };

  handleChangeInput = (evt) => {
    evt.preventDefault();
    const filter = evt.currentTarget.value;
    this.setState({ filter: filter });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addItem={this.onAddItem} />

        <h2>Contacts</h2>
        <Filter onChange={this.handleChangeInput} />
        <ContactList State={this.state} removeItem={this.onRemoveItem} />
      </>
    );
  }
}

export default App;
