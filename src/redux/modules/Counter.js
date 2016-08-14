/* @flow */
// Constants
export const constants = {
  HANDLE_COUNTER: 'HANDLE_COUNTER'
}

// Action Creators
export const actions = {
  increaseCounter: function () {
    return (dispatch, getState) => {
      let { counter: { counter } } = getState()
      dispatch({
        type: constants.HANDLE_COUNTER,
        payload: counter + 1
      })
    }
  },
  decreaseCounter: function () {
    return (dispatch, getState) => {
      let { counter: { counter } } = getState()
      dispatch({
        type: constants.HANDLE_COUNTER,
        payload: counter - 1
      })
    }
  }
}

const ACTION_HANDLERS = {
  HANDLE_COUNTER: function (state, action) {
    const { payload } = action
    return {
      ...state,
      counter: payload
    }
  }
}

const initialState = {
  counter: 0
}

export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
