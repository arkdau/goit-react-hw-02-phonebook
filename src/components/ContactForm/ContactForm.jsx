import { Component } from "react";
// import { nanoid } from "nanoid";

class ContactForm extends Component {
  state = {
    name: "",
    Number: "",
  };

handleSubmit = (evt) => {
  evt.preventDefault();

  const form = evt.currentTarget;
  console.log("form: ", form);
  const name = form.elements.name.value;
  const number = form.elements.number.value;

  console.log("name: ", name);

  this.setState({
    name: name,
    number: number,
  });

  this.props.addItem(name, number);
  console.log('props: ', this.props);

  console.log("state.name: ", this.state.name);

  form.reset();
};


// onAddItem = () => {
//   this.props.state.setState((state) => {
//     // const contacts = state.contacts.concat(state.name);
//     let contacts = [...this.props.state.contacts, {
//       name: state.name,
//       id: nanoid(),
//       number: state.number,
//     }];
//     console.log("add item-contacts:", contacts);
//     return {
//       contacts,
//       name: "",
//     };
//   });
// };


  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
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
        </form>
      </>
    );
  }
}

export default ContactForm
