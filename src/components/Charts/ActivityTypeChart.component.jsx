import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

import { getUserPerformance } from "../../utils/services";

const ActivityTypeChart = () => {
  const activityType = getUserPerformance(12);
  const performance = activityType.data;

  return (
    <div className="activity-type-chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius={78}
          //   margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          data={performance}
        >
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
          <Radar
            name="Lily"
            dataKey="B"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityTypeChart;
