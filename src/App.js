import CreateEditFeedback from "./screens/CreateEditFeedback";
import SuggestionDetails from "./screens/SuggestionDetails";
import Roadmap from "./screens/Roadmap";
import { suggestionList } from "./model";
import { Route, Routes } from "react-router-dom";
import { useCallback, useState } from "react";
import IndexScreen from "./screens/IndexScreen";
import GlobalContext from "./store/global-context";

function App() {
  const [suggestions, setSuggestions] = useState(suggestionList);

  const handleSetSuggestions = useCallback((handler) => {
    setSuggestions(handler);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        suggestions: suggestions,
        handler: handleSetSuggestions,
      }}
    >
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
          element={<SuggestionDetails suggestions={suggestions} />}
        />
        <Route
          path="/suggestions/:id/edit-feedback"
          element={
            <CreateEditFeedback
              suggestions={suggestions}
              handler={handleSetSuggestions}
              edit
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
    </GlobalContext.Provider>
  );
}

export default App;
