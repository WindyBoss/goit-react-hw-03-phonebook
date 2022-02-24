import { List, Contact, ContactButton } from "./Contacts.styled";


export default function ContactList ({
  contacts,
  onClick
}){
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <Contact key={id}>
          <p>{name}: {number}</p>
          <ContactButton type="button" onClick={() => onClick(id)}>delete</ContactButton>
        </Contact>
      ))}
    </List>
  );
};
