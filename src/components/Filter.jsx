function Filter({ selectedType, setSelectedType }) {
  const types = ["micro", "nano", "regional", "brewpub", "large"];

  return (
    <div className="input-group">
        <select
        className="border p-2 rounded mb-4"
        value={selectedType}
        onChange={e => setSelectedType(e.target.value)}
        >
        <option value="">All Types</option>
        {types.map(type => (
            <option key={type} value={type}>{type}</option>
        ))}
        </select>
    </div>
  );
}
export default Filter;
