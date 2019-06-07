import { GET_ALL_QUOTES, GET_TOP_QUOTES } from "./actions";

function quoteReducer(state = { topQuotes: [], allQuotes: [] }, action) {
  switch (action.type) {
    case GET_TOP_QUOTES:
      return {
        ...state,
        topQuotes: action.payload
      };
    case GET_ALL_QUOTES:
      return {
        ...state,
        allQuotes: action.payload
      };
    default:
      return state;
  }
}

export default quoteReducer;
