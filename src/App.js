import CreateEditFeedback from "./components/CreateEditFeedback";
import SuggestionDetails from "./components/SuggestionDetails";
import Roadmap from "./components/Roadmap";
import { suggestionList } from "./model";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import IndexScreen from "./screens/IndexScreen";

function App() {
  const [suggestions, setSuggestions] = useState(suggestionList);

  function handleSetSuggestions(handler) {
    setSuggestions(handler);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <IndexScreen
            suggestions={suggestions}
            handler={handleSetSuggestions}
          />
        }
      />
      <Route
        path="/suggestions/:id"
        element={
          <SuggestionDetails
            suggestions={suggestions}
            handler={handleSetSuggestions}
          />
        }
      />
      <Route
        path="/suggestions/:id/edit-feedback"
        element={
          <CreateEditFeedback
            suggestions={suggestions}
            modalType="edit"
            handler={handleSetSuggestions}
          />
        }
      />
      <Route
        path="/roadmap"
        element={
          <Roadmap suggestions={suggestions} handler={handleSetSuggestions} />
        }
      />
      <Route
        path="/create-feedback"
        element={
          <CreateEditFeedback
            suggestions={suggestions}
            handler={handleSetSuggestions}
          />
        }
      />
    </Routes>
  );
}

export default App;
