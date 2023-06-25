import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { MainContainer } from './Filter/Styled';

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

  componentDidMount() {
    const loadContacts = localStorage.getItem('contacts');
    let parsedContacts = JSON.parse(loadContacts);
    parsedContacts && this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const { contacts } = this.state;

    const filteredContacts = contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );

    return (
      <MainContainer>
        <h1>Phonebook</h1>

        <ContactForm addNewContact={this.addNewContact} />

        <h2>
          There
          {contacts.length === 1 ? (
            <span> is {contacts.length} contact </span>
          ) : (
            <span> are {contacts.length} contacts </span>
          )}
          in your phonebook
        </h2>

        <Filter handleChange={this.handleChange} filter={filter} />

        <Contacts
          contacts={contacts}
          filteredContacts={filteredContacts}
          filter={filter}
          deleteContact={this.deleteContact}
        />
      </MainContainer>
    );
  }
}
