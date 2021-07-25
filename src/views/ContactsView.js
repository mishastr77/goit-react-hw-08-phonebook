import React, { Component } from "react";
import Container from "../Components/Container";
import Form from "../Components/Form";
import ContactsList from "../Components/ContactsList";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Filter from "../Components/Filter";
import { fetchContact } from "../redux/contacts/contacts-operations";
import OnLoader from "../Components/OnLoader";
import { getLoading } from "../redux/contacts/contacts-selectors";

class ContactsView extends Component {
  static propTypes = {
    onFetchContacts: PropTypes.func,
    isLoadingContacts: PropTypes.bool,
  };
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <Container>
        <Form />
        <h2>Contacts</h2>
        {this.props.isLoadingContacts ? (
          <OnLoader />
        ) : (
          <>
            <Filter />
            <ContactsList />
          </>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingContacts: getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchContacts: () => dispatch(fetchContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
