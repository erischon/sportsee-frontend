import ActivityChart from "../components/Charts/ActivityChart.component";
import ActivityTypeChart from "../components/Charts/ActivityTypeChart.component";
import AverageScoreChart from "../components/Charts/AverageScoreChart.component";
import AverageSessionsChart from "../components/Charts/AverageSessionsChart.component";
import KeyInfos from "../components/KeyInfos/KeyInfos.component";

const Dashboard = () => {
  const userId = 18;

  return (
    <main>
      <KeyInfos userId={userId} />
      <AverageScoreChart userId={userId} />
      <ActivityTypeChart userId={userId} />
      <AverageSessionsChart userId={userId} />
      <ActivityChart userId={userId} />
    </main>
  );
};

export default Dashboard;
