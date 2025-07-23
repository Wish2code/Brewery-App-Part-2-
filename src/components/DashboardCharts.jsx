import { Pie, Bar } from "react-chartjs-2";
import { Chart, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function getTypeCounts(breweries) {
  const counts = {};
  breweries.forEach(b => {
    counts[b.brewery_type] = (counts[b.brewery_type] || 0) + 1;
  });
  return counts;
}

function getStateCounts(breweries) {
  const counts = {};
  breweries.forEach(b => {
    if (b.state) counts[b.state] = (counts[b.state] || 0) + 1;
  });
  return counts;
}

export default function DashboardCharts({ breweries }) {
  // Chart 1: Brewery Types
  const typeCounts = getTypeCounts(breweries);
  const typeData = {
    labels: Object.keys(typeCounts),
    datasets: [
      {
        label: "Brewery Types",
        data: Object.values(typeCounts),
        backgroundColor: [
          "#4FC3F7", "#9575CD", "#FFB74D", "#81C784", "#E57373", "#FFD54F", "#A1887F"
        ],
      },
    ],
  };

  // Chart 2: Breweries per State (Top 10)
  const stateCounts = getStateCounts(breweries);
  const sortedStates = Object.entries(stateCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  const stateData = {
    labels: sortedStates.map(([state]) => state),
    datasets: [
      {
        label: "Breweries per State (Top 10)",
        data: sortedStates.map(([, count]) => count),
        backgroundColor: "#4FC3F7",
      },
    ],
  };

  return (
    <div className="grid" style={{ marginBottom: "2rem" }}>
      <div className="card">
        <h2>Brewery Types Distribution</h2>
        <Pie data={typeData} />
      </div>
      <div className="card">
        <h2>Top 10 States by Brewery Count</h2>
        <Bar
          data={stateData}
          options={{ indexAxis: "y" }}
          width={300}    // Change this value for width
          height={400}   // Change this value for height
        />
      </div>
    </div>
  );
}