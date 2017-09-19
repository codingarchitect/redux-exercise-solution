import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Alert from './Alert.jsx';
import multiAlertStore from './multi-alert-store';


const App = ({ alert1Visible, alert2Visible, alert3Visible,
  showAlert1, showAlert2, showAlert3 }) => (
    <div>
      <Alert id="alert1" /><button disabled={alert1Visible} onClick={showAlert1}>Show Alert 1</button>
      <Alert id="alert2" /><button disabled={alert2Visible} onClick={showAlert2}>Show Alert 2</button>
      <Alert id="alert3" /><button disabled={alert3Visible} onClick={showAlert3}>Show Alert 3</button>
    </div>
);

App.propTypes = {
  alert1Visible: PropTypes.bool.isRequired,
  alert2Visible: PropTypes.bool.isRequired,
  alert3Visible: PropTypes.bool.isRequired,
  showAlert1: PropTypes.func.isRequired,
  showAlert2: PropTypes.func.isRequired,
  showAlert3: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  alert1Visible: multiAlertStore.selectors.visible(state, 'alert1'),
  alert2Visible: multiAlertStore.selectors.visible(state, 'alert2'),
  alert3Visible: multiAlertStore.selectors.visible(state, 'alert3'),
});

const mapDispatchToProps = (dispatch) => {
  console.log('mapDispatchToProps'); // eslint-disable-line
  dispatch(multiAlertStore.actionCreators.init('Message 1', true, 'alert1')); // eslint-disable-line
  dispatch(multiAlertStore.actionCreators.init('Message 2', false, 'alert2')); // eslint-disable-line
  dispatch(multiAlertStore.actionCreators.init('Message 3', true, 'alert3')); // eslint-disable-line
  return {
    showAlert1: () => dispatch(multiAlertStore.actionCreators.show('alert1')),
    showAlert2: () => dispatch(multiAlertStore.actionCreators.show('alert2')),
    showAlert3: () => dispatch(multiAlertStore.actionCreators.show('alert3')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
