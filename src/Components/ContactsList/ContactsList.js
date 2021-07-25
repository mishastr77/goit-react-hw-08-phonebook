import PropTypes from "prop-types";
import "./contactsList.module.css";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/contacts/contacts-operations";
import { getVisibleContacts } from "../../redux/contacts/contacts-selectors";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>
          {name}: {number}
        </p>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </Button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
