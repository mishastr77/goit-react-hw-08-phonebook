import React, { Component } from "react";
import PropTypes from "prop-types";
import Section from "../Section";
import shortid from "shortid";
import styles from "./form.module.css";
import { connect } from "react-redux";
import { addContact } from "../../redux/contacts/contacts-operations";
import Fab from "@material-ui/core/Fab";

class Form extends Component {
  static defaultProps = {
    name: "",
    number: "",
  };

  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
  };

  state = {
    name: this.props.name,
    number: this.props.number,
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addNoRepeatContact = (state, contacts) => {
    const { name, number } = state;
    if (
      contacts.some(
        (contacts) => contacts.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (contacts.some((contacts) => contacts.number === number)) {
      alert(`${number} is already in contacts`);
      return;
    }

    this.props.onSubmit(state);
    this.reset();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { contacts } = this.props;
    this.addNoRepeatContact(this.state, contacts);
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  inputNameId = shortid.generate();
  inputNumberId = shortid.generate();

  render() {
    const { name, number } = this.state;
    return (
      <Section title="Phonebook">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.inputNameId}>
            Name
            <input
              className={styles.inputForm}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              id={this.inputNameId}
            />
          </label>
          <label htmlFor={this.inputNumberId}>
            Number
            <input
              className={styles.inputForm}
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              required
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              id={this.inputNumberId}
            />
          </label>
          <Fab
            color="primary"
            aria-label="add"
            type="submit"
            className={styles.buttonForm}
          >
            Add contact
          </Fab>
        </form>
      </Section>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
