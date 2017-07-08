const INITIAL_STATE = {
  summary: {credit: 0, debt: 0}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SUMMARY_FETCHED':
      return { ...state, summary: action.payload}
    default:
      return state
  }
}
