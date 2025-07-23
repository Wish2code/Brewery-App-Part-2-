import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SummaryCards from "./components/SummaryCards";
import BreweryTable from "./components/BreweryTable";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import BreweryDetail from "./components/BreweryDetail"; // new
import DashboardCharts from "./components/DashboardCharts";
import "./App.css";

function Dashboard({ breweries, query, setQuery, selectedType, setSelectedType }) {
  const filtered = breweries.filter(b =>
    b.name.toLowerCase().includes(query.toLowerCase()) &&
    (selectedType === "" || b.brewery_type === selectedType)
  );

  return (
    <div className="container">
      <h1>🍻 Brewery Dashboard</h1>
      <DashboardCharts breweries={filtered} />
      <SummaryCards breweries={filtered} />
      <SearchBar query={query} setQuery={setQuery} />
      <Filter selectedType={selectedType} setSelectedType={setSelectedType} />
      <BreweryTable breweries={filtered} />
    </div>
  );
}

function App() {
  const [breweries, setBreweries] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://api.openbrewerydb.org/v1/breweries");
      setBreweries(res.data);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              breweries={breweries}
              query={query}
              setQuery={setQuery}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
            />
          }
        />
        <Route path="/brewery/:id" element={<BreweryDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

