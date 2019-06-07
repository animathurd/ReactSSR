import allQuotes from "./data/quotes";
import topQuotes from "./data/topQuotes";

export const GET_ALL_QUOTES = "GET_ALL_QUOTES";
export const GET_TOP_QUOTES = "GET_TOP_QUOTES";

export const getAllQuotes = () => {
  return {
    type: GET_ALL_QUOTES,
    payload: allQuotes
  };
};

export const getTopQuotes = () => {
  return {
    type: GET_TOP_QUOTES,
    payload: topQuotes
  };
};
