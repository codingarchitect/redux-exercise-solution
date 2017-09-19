import React from 'react';
import { connect } from 'react-redux';
import multiAlertStore from './multi-alert-store';

const Alert = ({ message, visible, hide }) => (visible && (<div>
    {message}<button onClick={hide}>x</button>
  </div>));

const mapStateToProps = (state, { id }) => ({
  message: multiAlertStore.selectors.message(state, id),
  visible: multiAlertStore.selectors.visible(state, id),
});

const mapDispatchToProps = (dispatch, { id }) => ({
  hide: () => dispatch(multiAlertStore.actionCreators.hide(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
