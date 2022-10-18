import ActivityChart from "../components/Charts/ActivityChart.component";
import ActivityTypeChart from "../components/Charts/ActivityTypeChart.component";
import AverageSessionsChart from "../components/Charts/AverageSessionsChart.component";

const Dashboard = () => {
  return (
    <main>
      <ActivityTypeChart />
      <AverageSessionsChart />
      <ActivityChart />
    </main>
  );
};

export default Dashboard;
