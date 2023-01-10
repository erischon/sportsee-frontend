import PropTypes from "prop-types";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

/**
 * Component who display Average Sessions Chart
 * @component
 * @param {Object[]} props
 * @param {{day: string, sessionLength: number}} props.sessions
 * @returns {React.ReactElement}
 */
const AverageSessionsChart = ({ sessions }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="sessionLength">{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="average-sessions-chart">
      <h2 className="average-sessions-chart__title">
        Durée moyenne des sessions
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={258} height={263} data={sessions}>
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            stroke="white"
            padding={{ left: 13, right: 13 }}
          />
          <YAxis padding={{ top: 70, bottom: 20 }} hide={true} />
          <Tooltip content={CustomTooltip} wrapperStyle={{ outline: "none" }} />
          <Line
            type="monotoneX"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            dot={false}
            activeDot={{ stroke: "white", strokeWidth: 5, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionsChart;

AverageSessionsChart.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      sessionLength: PropTypes.number,
    })
  ),
};
