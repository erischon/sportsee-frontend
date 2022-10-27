import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

import { getUserPerformance } from "../../utils/services.dev";

const ActivityTypeChart = ({ userId }) => {
  const activityType = getUserPerformance(userId);
  const performance = activityType.data;

  return (
    <div className="activity-type-chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={78} data={performance}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: "white" }}
            style={{ textTransform: "capitalize" }}
          />

          <Radar
            dataKey="value"
            stroke="#FF0101B2"
            fill="#FF0101B2"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityTypeChart;
