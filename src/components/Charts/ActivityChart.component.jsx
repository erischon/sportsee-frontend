import { ResponsiveContainer, BarChart, Bar } from "recharts";

import { getUserActivity } from "../../utils/services";

const ActivityChart = () => {
  const userActivity = getUserActivity(12);
  const sessions = userActivity.sessions;

  console.log("======USERACTIVITY", sessions);

  return (
    <div>
      <BarChart width={150} height={40} data={sessions}>
        <Bar dataKey="kilogram" fill="#282D30" />
        <Bar dataKey="calories" fill="#E60000" />
      </BarChart>
    </div>
  );
};

export default ActivityChart;
