import ActivityChart from "../components/Charts/ActivityChart.component";
import ActivityTypeChart from "../components/Charts/ActivityTypeChart.component";
import AverageScoreChart from "../components/Charts/AverageScoreChart.component";
import AverageSessionsChart from "../components/Charts/AverageSessionsChart.component";
import KeyInfos from "../components/KeyInfos/KeyInfos.component";

const Dashboard = () => {
  return (
    <main>
      <KeyInfos />
      <AverageScoreChart />
      <ActivityTypeChart />
      <AverageSessionsChart />
      <ActivityChart />
    </main>
  );
};

export default Dashboard;
