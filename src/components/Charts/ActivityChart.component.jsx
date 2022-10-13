import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { getUserActivity } from "../../utils/services";

const ActivityChart = () => {
  const userActivity = getUserActivity(12);
  const sessions = userActivity.sessions;

  const getDay = (date) => {
    const dateObj = new Date(date);

    return dateObj.getUTCDate();
  };

  return (
    <div className="activity-chart">
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={730}
          height={250}
          data={sessions}
          barCategoryGap={20}
          barGap={8}
          barSize={7}
        >
          <XAxis dataKey="day" tickLine={false} />
          <YAxis orientation="right" tickLine={false} axisLine={false} />
          <Tooltip />
          <Legend
            verticalAlign="top"
            align="right"
            height={72}
            iconType="circle"
            iconSize="8"
          />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            name="Poids (kg)"
            radius={[3, 3, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            name="Calories brûlées (kCal)"
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
