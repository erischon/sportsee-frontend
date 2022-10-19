import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

import { getUserMainData } from "../../utils/services";

const AverageScoreChart = () => {
  const mainUserData = getUserMainData(18);
  const averageScore = [{ score: mainUserData.todayScore * 100 }];

  return (
    <div className="average-score-chart">
      <article className="radial-chart__label">
        <h2>{`${averageScore[0].score}%`}</h2>
        <span>de votre objectif</span>
      </article>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={258}
          height={263}
          innerRadius="70%"
          outerRadius="70%"
          data={averageScore}
          barSize={10}
          startAngle={90}
          endAngle={450}
        >
          <RadialBar
            background
            clockWise={false}
            fill="#FF0000"
            dataKey="score"
            radius={[6, 3, 3, 3]}
          />
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageScoreChart;
