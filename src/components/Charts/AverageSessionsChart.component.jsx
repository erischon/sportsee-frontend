import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { getUserAverageSessions } from "../../utils/services";

const AverageSessionsChart = () => {
  const userAverageSessions = getUserAverageSessions(12);
  const sessions = userAverageSessions.sessions;

  return (
    <div className="average-sessions-chart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={258} height={263} data={sessions}>
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            stroke="white"
            padding={{ left: 13, right: 13 }}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            dot={false}
            activeDot={{ stroke: "white", strokeWidth: 5, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionsChart;
