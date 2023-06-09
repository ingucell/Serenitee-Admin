import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { SignOut } from '../../actions';
import { withFirebase } from '../../services/index';

import Home from '../../pages/Home'

class HomeContainer extends Component {
  handleSignOut = () => {
    const { firebase, SignOut } = this.props;

    firebase
      .signOut()
      .then(() => {
        SignOut();
      })
      console.log(this.props, 1)
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };


  render() {
    return <Home user={this.props.user} handleSignOut={this.handleSignOut} />;
  }
}

const mapStateToProps = state => {
  return { user: state.auth.user};
};

export default compose(
  connect(
    mapStateToProps,
     { SignOut }
  ),
  withFirebase
)(HomeContainer);
