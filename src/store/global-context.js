import React from "react";
import { suggestionList } from "../model";

const GlobalContext = React.createContext({
  suggestions: suggestionList,
  handler: () => {},
});

export default GlobalContext;
