import PropTypes from 'prop-types';

export const Contacts = ({ contacts, filter, deleteContact }) => {
  return (
    <>
      {filter ? (
        <ul>
          {contacts
            .filter(
              contact =>
                contact.name.toLowerCase().includes(filter.toLowerCase()) ||
                contact.number.includes(filter)
            )
            .map(filteredContact => (
              <li key={filteredContact.id}>
                {filteredContact.name} {filteredContact.number}
                <button onClick={() => deleteContact(filteredContact.id)}>
                  X
                </button>
              </li>
            ))}
        </ul>
      ) : (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name} {contact.number}
              <button onClick={() => deleteContact(contact.id)}>X</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  deleteContact: PropTypes.func,
};
