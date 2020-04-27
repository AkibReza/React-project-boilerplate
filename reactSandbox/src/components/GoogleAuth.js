import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1042096773706-jk6qvnk5ssnh1s36fimu6hf4mjp9q78b.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.authorizer = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.authorizer.isSignedIn.get());
          this.authorizer.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (bool) => {
    if (bool === true) {
      this.props.signIn(this.authorizer.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.authorizer.signIn();
  };
  onSignOutClick = () => {
    this.authorizer.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn === true) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon"></i>Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon"></i>
          Sign In
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
