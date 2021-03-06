export default (state = [], action) => {
  let index
  let quote

switch (action.type) {

  case 'ADD_QUOTE':
    return state.concat(action.quote)

  case 'REMOVE_QUOTE':
    return state.filter(quote => quote.id !== action.quoteId)

  case 'UPVOTE_QUOTE':
    index = state.findIndex(quote => quote.id === action.quoteId)
    quote = {...state[index], votes: state[index].votes + 1}
    return [...state.slice(0, index), quote, ...state.slice(index + 1)]

  case 'DOWNVOTE_QUOTE':
    index = state.findIndex(quote => quote.id === action.quoteId)
    if (state[index].votes > 0) {
      quote = {...state[index], votes: state[index].votes - 1}
      return [...state.slice(0, index), quote, ...state.slice(index + 1)]
    }
    return state

  default:
    return state
  }
}
