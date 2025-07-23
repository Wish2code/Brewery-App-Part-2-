import { Link } from "react-router-dom";

function BreweryTable({ breweries }) {
  return (
    <div className="scroll-table">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {breweries.map(b => (
            <tr key={b.id}>
              <td>
                <Link to={`/brewery/${b.id}`}>{b.name}</Link>
              </td>
              <td>{b.brewery_type}</td>
              <td>{b.city}</td>
              <td>{b.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BreweryTable;

