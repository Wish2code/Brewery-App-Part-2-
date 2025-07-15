function BreweryTable({ breweries }) {
  return (
    <div className="scroll-table">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Location</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {breweries.map(b => (
            <tr key={b.id}>
              <td>{b.name}</td>
              <td>{b.brewery_type}</td>
              <td>{b.city}, {b.state}</td>
              <td>
                {b.phone ? (
                  <a href={`tel:${b.phone}`} style={{ color: "#4FC3F7" }}>
                    {b.phone}
                  </a>
                ) : (
                  "N/A"
                )}
              </td>
              <td>
                {b.website_url ? (
                  <a href={b.website_url} target="_blank" rel="noopener noreferrer" style={{ color: "#4FC3F7" }}>
                    Website
                  </a>
                ) : (
                  "N/A"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default BreweryTable;

