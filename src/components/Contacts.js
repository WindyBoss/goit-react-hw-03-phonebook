import { Component } from "react";
import ContactForm from "./ContactForm";
import { nanoid } from 'nanoid'
import Filter from "./Filter";
import ContactList from "./ContactList";

const LS_KEY = 'phonebook';

export default class Contacts extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
      if (prevState.contacts !== contacts) {
        localStorage.setItem(LS_KEY, JSON.stringify(contacts));
      };
  };

  componentDidMount() {
    const savedState = JSON.parse(localStorage.getItem(LS_KEY));

      if (savedState) {
        this.setState({ contacts: savedState });
      };
  };

  addContact = ({ name, number }) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in the contact list`);
      return;
    };

    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts]
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContacts = (e) => {
    const keyword = e.target.value;
    this.setState({ filter: keyword });
  };

  getContacts() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  render() {
    const contacts = this.getContacts();
    return (
      <>
        <h2>Phonebook</h2>
        <div>
          <ContactForm onSubmit={this.addContact} />
          <div>
            <h2>Contacts</h2>
            <Filter onChange={this.filterContacts} />
            <ContactList contacts={contacts} onClick={this.deleteContact}/>
          </div>
        </div>
      </>
    );
  }
}
