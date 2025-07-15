function SummaryCards({ breweries }) {
  const total = breweries.length;
  const cities = [...new Set(breweries.map(b => b.city))].length;
  const types = [...new Set(breweries.map(b => b.brewery_type))].length;

  return (
    <div className="grid">
      <div className="card">Total Breweries: {total}</div>
      <div className="card">Unique Cities: {cities}</div>
      <div className="card">Brewery Types: {types}</div>
    </div>
  );
}
export default SummaryCards;