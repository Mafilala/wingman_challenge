"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LegendProps,
  Cell,
  ReferenceLine,
  Label,
  ResponsiveContainer,
} from "recharts";
import { Separator } from "./ui/separator";

const barData = [
  { day: "Mon", incoming: 40, answered: 30, experts: 28 },
  { day: "Tue", incoming: 35, answered: 28, experts: 28 },
  { day: "Wed", incoming: 38, answered: 30, experts: 32 },
  { day: "Thu", incoming: 50, answered: 35, experts: 58 },
  { day: "Fri", incoming: 45, answered: 32, experts: 32 },
  { day: "Sat", incoming: 48, answered: 34, experts: 36 },
  { day: "Sun", incoming: 55, answered: 40, experts: 36 },
];

const lineData = [
  { time: "Mon", incoming: 40, answered: 30 },
  { time: "Monday Afternoon", incoming: 38, answered: 29 },
  { time: "Monday Evening", incoming: 36, answered: 28 },
  { time: "Tue", incoming: 35, answered: 28 },
  { time: "Tuesday Afternoon", incoming: 34, answered: 27 },
  { time: "Tuesday Evening", incoming: 33, answered: 26 },
  { time: "Wed", incoming: 38, answered: 30 },
  { time: "Wednesday Afternoon", incoming: 39, answered: 31 },
  { time: "Wednesday Evening", incoming: 40, answered: 32 },
  { time: "Thu", incoming: 50, answered: 35 },
  { time: "Thursday Afternoon", incoming: 48, answered: 34 },
  { time: "Thursday Evening", incoming: 46, answered: 33 },
  { time: "Fri", incoming: 45, answered: 32 },
  { time: "Friday Afternoon", incoming: 46, answered: 33 },
  { time: "Friday Evening", incoming: 47, answered: 34 },
  { time: "Sat", incoming: 48, answered: 34 },
  { time: "Saturday Afternoon", incoming: 50, answered: 35 },
  { time: "Saturday Evening", incoming: 52, answered: 36 },
  { time: "Sun", incoming: 55, answered: 40 },
  { time: "Sunday Afternoon", incoming: 56, answered: 41 },
  { time: "Sunday Evening", incoming: 57, answered: 42 },
];

const thirdAxisValues = [0, 12, 24, 36, 48, 60]; // Values for horizontal lines on the YAxis
const actualValues = [10, 10, 10, 10, 10, 20];
const mergedData = lineData.map((linePoint) => {
  const barPoint = barData.find((bar) => bar.day === linePoint.time);
  return {
    ...linePoint,
    experts: barPoint ? barPoint.experts : 0, // Add experts if it matches, else 0
  };
});

interface CustomTickProps {
  x: number;
  y: number;
  payload: {
    value: string;
  };
  index: number;
}

const CustomTick: React.FC<CustomTickProps> = (props) => {
  const { x, y, payload, index } = props;
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fill="#667085"
      fontSize={12}
      fontWeight="normal"
    >
      {payload.value + 10}
    </text>
  );
};

const renderLegend: LegendProps["content"] = (props) => {
  const { payload } = props;

  if (!payload) return null;

  return (
    <div className="flex flex-col justify-start  gap-2 mt-4">
      <Separator />
      <div className="flex justify-start items-center gap-4   mt-4">
        {payload.map((entry, index) => (
          <div
            key={`items-${entry.value}`}
            className="flex justify-between items-center gap-2"
          >
            <div
              className="w-4 h-1 rounded-md"
              style={{ backgroundColor: entry.color }}
            ></div>
            <p className="text-[10px]">{entry.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ConsultationsChart() {
  return (
    <Card className="col-span-2  flex flex-col items-center w-full">
      <div className="flex w-full">
        <div className="w-full">
          <CardHeader className="">
            <h3>Consultations</h3>
          </CardHeader>
          <CardContent className="">
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart
                width={510}
                data={mergedData}
                margin={{ top: 0, right: 25, left: -12, bottom: 0 }}
                // className="w-full"
              >
                <XAxis
                  tick={{ stroke: "#667085", fontSize: 10, strokeWidth: 0.25 }}
                  minTickGap={1}
                  dataKey="time"
                  tickFormatter={(time) =>
                    barData.some((d) => d.day === time) ? time : ""
                  }
                  tickLine={{
                    stroke: "transparent",
                    strokeWidth: 0,
                    height: 0,
                  }}
                  axisLine={{ strokeWidth: 0, height: 0 }}
                  tickSize={10}
                />
                <YAxis
                  domain={[0, 65]}
                  tick={false}
                  tickLine={{
                    stroke: "transparent",
                    strokeWidth: 0,
                    height: 0,
                  }}
                  axisLine={{ strokeWidth: 0, height: 0 }}
                  // tickSize={20}
                  // type="number"
                  // tickCount={7}
                  // tick={CustomTick}
                >
                  <Label
                    angle={-90}
                    value="Consultations"
                    dx={-10}
                    style={{
                      fontSize: "8px",
                      fill: "#C4C4C4",
                      fontWeight: "normal",
                      textTransform: "uppercase",
                    }}
                  />
                </YAxis>
                <Legend content={renderLegend} />
                {thirdAxisValues.map((val, idx) => (
                  <ReferenceLine
                    key={idx}
                    y={val}
                    stroke="#667085"
                    strokeDasharray="5 3"
                  >
                    <Label
                      fontSize={12}
                      value={actualValues[idx]}
                      offset={10}
                      position="right"
                    />
                    <Label
                      fontSize={12}
                      value={idx * 10 + 10}
                      offset={10}
                      position="left"
                    />
                  </ReferenceLine>
                ))}

                <Bar
                  radius={[5, 5, 0, 0]}
                  dataKey="experts"
                  fill="#FFF3C6"
                  name="Experts Online"
                >
                  {mergedData.map((entry, index) => {
                    const width = entry.experts === 0 ? 0 : 32;
                    return <Cell key={`cell-${index}`} width={width} />;
                  })}
                </Bar>
                <Line
                  type="monotone"
                  dataKey="incoming"
                  stroke="#8A94A6"
                  name="Incoming"
                  strokeDasharray="5 5"
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="answered"
                  stroke="#15B79F"
                  name="Answered"
                  dot={false}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </div>
        <div
          style={{
            transform: "rotate(-90deg)",
            fontSize: "8px",
          }}
          className="h-fit self-center text-nowrap ml-[-45px] mb-10 uppercase text-[#C4C4C4] "
        >
          Experts Online
        </div>
      </div>
    </Card>
  );
}
