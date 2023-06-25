import {
  StyledItem,
  StyledItemBtn,
  StyledList,
} from 'components/Filter/Styled';
import PropTypes from 'prop-types';

export const Contacts = ({ contacts, filter, deleteContact }) => {
  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );
  return (
    <>
      {filter ? (
        <>
          <h4>Search result:</h4>
          {filteredContacts.length ? (
            <StyledList>
              {filteredContacts.map(filteredContact => (
                <StyledItem key={filteredContact.id}>
                  {filteredContact.name} {filteredContact.number}
                  <StyledItemBtn
                    onClick={() => deleteContact(filteredContact.id)}
                  >
                    &#x2716;
                  </StyledItemBtn>
                </StyledItem>
              ))}
            </StyledList>
          ) : (
            <p>
              Sorry, friend, but you have no contacts matching your search
              querry 😒
            </p>
          )}
        </>
      ) : (
        <>
          <StyledList>
            {contacts.map(contact => (
              <StyledItem key={contact.id}>
                {contact.name} {contact.number}
                <StyledItemBtn onClick={() => deleteContact(contact.id)}>
                  &#x2716;
                </StyledItemBtn>
              </StyledItem>
            ))}
          </StyledList>
        </>
      )}
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  deleteContact: PropTypes.func,
};
