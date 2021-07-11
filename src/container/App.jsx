import React from "react";
import "./App.css";
import Movies from "../components/movie/Movies";

const App = () => {
  return (
    <>
      <h2 className="text-center"> hello world</h2>

      <main className="container">
        <Movies />
      </main>
    </>
  );
};

export default App;
