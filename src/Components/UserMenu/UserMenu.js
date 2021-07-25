import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import Button from "@material-ui/core/Button";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  email: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ email, onLogout }) => (
  <div style={styles.container}>
    <span style={styles.mail}>Welcome, {email}</span>
    <Button
      onClick={onLogout}
      variant="contained"
      color="primary"
      href="#contained-buttons"
    >
      Logout
    </Button>
  </div>
);
const mapStateToProps = (state) => ({
  email: authSelectors.getUseremail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
