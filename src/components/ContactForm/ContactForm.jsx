import PropTypes from 'prop-types';

import { Component } from 'react';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    errors: {},
  };

  namePattern = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
  phonePattern =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

  validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(this.namePattern, 'Invalid name')
      .required('Name is required'),
    number: Yup.string()
      .matches(this.phonePattern, 'Invalid phone number')
      .required('Phone number is required'),
  });

  handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();

    const newContact = {
      id,
      name: this.state.name,
      number: this.state.number,
    };

    this.validationSchema
      .validate(newContact, { abortEarly: false })
      .then(validData => {
        const { addNewContact } = this.props;
        addNewContact(validData);

        this.setState({
          name: '',
          number: '',
          errors: {},
        });
      })
      .catch(validationErrors => {
        const errors = {};
        validationErrors.inner.forEach(error => {
          errors[error.path] = error.message;
        });

        this.setState({ errors });
      });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value }, () => {
      if (name === 'name') {
        this.validationSchema
          .validateAt('name', value)
          .then(() => {
            this.setState(prevState => ({
              errors: {
                ...prevState.errors,
                name: '',
              },
            }));
          })
          .catch(validationError => {
            this.setState(prevState => ({
              errors: {
                ...prevState.errors,
                name: validationError.message,
              },
            }));
          });
      }
    });
  };

  render() {
    return (
      <form action="submit" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.name}
          type="text"
          name="name"
          placeholder="Name"
          title="Name may contain only letters, apostrophe, dash and spaces. For
          example Adrian, Jacob Mercer, Charles de Batz de Castelmore
          d'Artagnan"
          required
        />
        <p>{this.state.errors.name}</p>

        <input
          onChange={this.handleChange}
          value={this.state.number}
          type="tel"
          name="number"
          placeholder="Phone"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <p>{this.state.errors.number}</p>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  addNewContact: PropTypes.func,
};
