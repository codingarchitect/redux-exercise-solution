const initialState = {
  message: '',
  visible: true,
};

const actions = {
  show: 'SHOW_ALERT',
  hide: 'HIDE_ALERT',
  init: 'INIT_ALERT',
};

const actionCreators = {
  show: () => ({ type: actions.show }),
  hide: () => ({ type: actions.hide }),
  init: (message, visible) => ({ type: actions.init, payload: { message, visible } }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.show: {
      return {
        ...state,
        visible: true,
      };
    }
    case actions.hide: {
      return {
        ...state,
        visible: false,
      };
    }
    case actions.init: {
      return {
        message: action.payload.message,
        visible: action.payload.visible,
      };
    }
    default:
      break;
  }
  return state;
};

const selectors = {
  visible: state => state.visible,
  message: state => state.message,
};

export default {
  initialState,
  actions,
  actionCreators,
  reducer,
  selectors,
};
