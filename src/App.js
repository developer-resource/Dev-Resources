import React, { useState } from "react";
import "./App.css";
import { Nav, Container } from "./components";
function App() {
  const [search, setSearch] = useState("");

  const handleSearch = (val) => {
    setSearch(val);
  };

  return (
    <div>
      <Nav handleSearch={handleSearch} />
      <Container searchText={search} />
    </div>
  );
}

export default App;
