import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <LoadingBar height={3} color="#f11946" progress={progress} />
      <Routes>
        <Route
          path="/"
          element={
            <News
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              apiKey={apiKey}
              country="in"
              category="general"
            />
          }
        ></Route>
        <Route
          path="/business"
          element={
            <News
              setProgress={setProgress}
              key="business"
              pageSize={pageSize}
              apiKey={apiKey}
              country="in"
              category="business"
            />
          }
        ></Route>
        <Route
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              key="entertainment"
              pageSize={pageSize}
              apiKey={apiKey}
              country="in"
              category="entertainment"
            />
          }
        ></Route>
        <Route
          path="/general"
          element={
            <News
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              apiKey={apiKey}
              country="in"
              category="general"
            />
          }
        ></Route>
        <Route
          path="/health"
          element={
            <News
              setProgress={setProgress}
              key="health"
              pageSize={pageSize}
              apiKey={apiKey}
              country="in"
              category="health"
            />
          }
        ></Route>
        <Route
          path="/science"
          element={
            <News
              setProgress={setProgress}
              key="science"
              pageSize={pageSize}
              apiKey={apiKey}
              country="in"
              category="science"
            />
          }
        ></Route>
        <Route
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              key="sports"
              pageSize={pageSize}
              apiKey={apiKey}
              country="in"
              category="sports"
            />
          }
        ></Route>
        <Route
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              key="technology"
              pageSize={pageSize}
              apiKey={apiKey}
              country="in"
              category="technology"
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
