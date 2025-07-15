import { useEffect, useState } from "react";
import axios from "axios";
import SummaryCards from "./components/SummaryCards";
import BreweryTable from "./components/BreweryTable";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import "./App.css";

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

  const filtered = breweries.filter(b =>
    b.name.toLowerCase().includes(query.toLowerCase()) &&
    (selectedType === "" || b.brewery_type === selectedType)
  );

  return (
    <div className="container">
      <h1>🍻 Brewery Dashboard</h1>
      <SummaryCards breweries={filtered} />
      <SearchBar query={query} setQuery={setQuery} />
      <Filter selectedType={selectedType} setSelectedType={setSelectedType} />
      <BreweryTable breweries={filtered} />
    </div>
  );
}

export default App;

