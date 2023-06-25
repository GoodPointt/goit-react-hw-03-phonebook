import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  isExist = newContact => {
    return this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? true
      : false;
  };

  addNewContact = newContact => {
    if (this.isExist(newContact)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contactId !== contact.id),
    }));
  };

  handleChange = e => {
    e.preventDefault();
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="root__div">
        <h1>Phonebook</h1>

        <ContactForm addNewContact={this.addNewContact} />

        <h2>Contacts:</h2>

        <Filter handleChange={this.handleChange} filter={this.state.filter} />

        <Contacts
          contacts={this.state.contacts}
          filter={this.state.filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
