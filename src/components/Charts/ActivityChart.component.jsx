import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { getUserActivity } from "../../utils/services";

const ActivityChart = ({ userId }) => {
  const userActivity = getUserActivity(userId);
  const sessions = userActivity.sessions;

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="kilogram">{`${payload[0].value}kg`}</p>
          <p className="calories">{`${payload[1].value}Kcal`}</p>
        </div>
      );
    }

    return null;
  };

  const CustomLegend = ({ payload }) => {
    return (
      <div className="custom-legend">
        <ul>
          <li className="kilogram">
            <span>{`${payload[0].value}`}</span>
          </li>
          <li className="calories">
            <span>{`${payload[1].value}`}</span>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="activity-chart">
      <h2 className="activity-chart__title">Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={730}
          height={250}
          data={sessions}
          barCategoryGap={20}
          barGap={8}
          barSize={7}
        >
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <XAxis dataKey="day" tickLine={false} />
          <YAxis orientation="right" tickLine={false} axisLine={false} />
          <Tooltip
            wrapperStyle={{ outline: "none" }}
            offset={60}
            content={CustomTooltip}
          />
          <Legend
            verticalAlign="top"
            align="right"
            height={72}
            iconType="circle"
            iconSize="8"
            content={CustomLegend}
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
