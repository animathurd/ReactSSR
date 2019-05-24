import TopQuotes from "./components/topQuotes.component";
import AllQuotes from "./components/allQuotes.component";

export default [
  {
    path: "/",
    component: TopQuotes,
    exact: true
  },
  {
    path: "/allQuotes",
    component: AllQuotes,
    exact: true
  }
];
