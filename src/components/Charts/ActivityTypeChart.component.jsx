import PropTypes from "prop-types";

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

/**
 * Component who display Activity Type Chart
 * @component
 * @param {Object[]} props
 * @param {{value: number, kind: string}} props.performance
 * @returns {React.ReactElement}
 */
const ActivityTypeChart = ({ performance }) => {
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

ActivityTypeChart.propTypes = {
  performance: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.string,
    })
  ),
};
