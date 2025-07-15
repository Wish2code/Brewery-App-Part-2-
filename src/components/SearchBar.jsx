function SearchBar({ query, setQuery }) {
  return (
    <div className="input-group">
        <input
        type="text"
        placeholder="Search by name..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="border p-2 rounded w-full mb-4"
        />
    </div>
  );
}
export default SearchBar;