import CreateEditFeedback from "./components/CreateEditFeedback";
import SuggestionDetails from "./components/SuggestionDetails";
import Roadmap from "./components/Roadmap";
import { suggestionList } from "./model";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import IndexScreen from "./screens/IndexScreen";
import RoadmapCard from "./components/RoadmapCard";

function App() {
  const [suggestions, setSuggestions] = useState(suggestionList);

  function handleSetSuggestions(handler) {
    setSuggestions(handler);
  }

  return <Roadmap suggestions={suggestions} handler={handleSetSuggestions} />;
}

export default App;
