import alertStore from './alert-store';

const initialState = {};

const actionCreators = {
  show: id => ({ ...alertStore.actionCreators.show(), id }),
  hide: id => ({ ...alertStore.actionCreators.hide(), id }),
  init: (message, visible, id) => ({ ...alertStore.actionCreators.init(message, visible), id }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case alertStore.actions.show:
    case alertStore.actions.hide:
    case alertStore.actions.init:
      return {
        ...state,
        [action.id]: alertStore.reducer(state[action.id], action),
      };
    default:
      break;
  }
  return state;
};

const selectors = {
  visible: (state, id) => alertStore.selectors.visible(state[id] || alertStore.initialState),
  message: (state, id) => alertStore.selectors.message(state[id] || alertStore.initialState),
};

export default {
  initialState,
  actions: alertStore.actions,
  actionCreators,
  reducer,
  selectors,
};
