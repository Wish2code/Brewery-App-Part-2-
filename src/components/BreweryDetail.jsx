import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BreweryDetail() {
  const { id } = useParams();
  const [brewery, setBrewery] = useState(null);

  useEffect(() => {
    axios.get(`https://api.openbrewerydb.org/v1/breweries/${id}`)
      .then(res => setBrewery(res.data));
  }, [id]);

  if (!brewery) return <div>Loading...</div>;

  return (
    <div className="container">
      <Link to="/">← Back to Dashboard</Link>
      <h1>{brewery.name}</h1>
      <div className="card">
        <p><strong>Type:</strong> {brewery.brewery_type}</p>
        <p><strong>Address:</strong> {brewery.street}, {brewery.city}, {brewery.state} {brewery.postal_code}</p>
        <p><strong>Phone:</strong> {brewery.phone || "N/A"}</p>
        <p><strong>Website:</strong> {brewery.website_url ? <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a> : "N/A"}</p>
        <p><strong>Country:</strong> {brewery.country}</p>
        {/* Add any extra info you want here */}
      </div>
    </div>
  );
}

export default BreweryDetail;