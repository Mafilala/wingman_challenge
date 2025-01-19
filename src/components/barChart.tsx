"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ReferenceLine,
  Label,
  ResponsiveContainer,
  LegendProps,
} from "recharts";
import { Separator } from "./ui/separator";

type CustomTickProps = {
  x: number; // x-coordinate for the tick label
  y: number; // y-coordinate for the tick label
  payload: {
    value: string | number; // The label text for the tick
  };
};

const thirdAxisValues = [0, 12, 24, 36, 48, 60];
const actualValues = [10, 10, 10, 10, 10, 20];
const data = [
  { name: "This week", Consultations: 63, OrdersClosed: 56 },
  { name: "Last week", Consultations: 54, OrdersClosed: 50 },
];

const CustomTick = ({ x, y, payload }: CustomTickProps) => {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fill="#667085"
      fontSize={12}
      fontWeight="normal"
    >
      {payload.value}
    </text>
  );
};

const renderLegend: LegendProps["content"] = (props) => {
  const { payload } = props;

  if (!payload) return null;

  return (
    <div className="flex flex-col gap-2 mt-4 -ml-4">
      <Separator />
      <div className="flex justify-start items-center gap-4  mt-4">
        {payload.map((entry, index) => (
          <div
            key={`items-${entry.value}`}
            className="flex justify-between items-center gap-2"
          >
            <div
              className="w-1 h-1 rounded-md sm:w-4 lg:w-1 xl:w-4"
              style={{ backgroundColor: entry.color }}
            ></div>
            <p className="text-[10px]">{entry.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const VSPeriodCard = () => {
  return (
    <Card className="flex flex-col items-right justify-between sm:min-w-[270px] lg:min-w-fitt max-w-[270px]">
      <CardHeader className="self-start ">
        <h3 className="text-sm font-medium">VS Past Period</h3>
      </CardHeader>
      <CardContent className="">
        <ResponsiveContainer width="100%" height={300} className="">
          <BarChart
            data={data}
            barCategoryGap={10}
            barGap={6}
            margin={{ top: 0, right: 0, left: 20, bottom: 0 }}
            className=""
          >
            <XAxis
              dataKey="name"
              tickSize={20}
              tickLine={{ stroke: "transparent", strokeWidth: 0, height: 0 }}
              axisLine={{ strokeWidth: 0, height: 0 }}
              tick={(props) => <CustomTick {...props} />}
            />
            <YAxis domain={[0, 65]} hide />

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
                  position="left"
                />
              </ReferenceLine>
            ))}
            <Bar dataKey="Consultations" fill="#CCFBEF" radius={[5, 5, 0, 0]} />
            <Bar dataKey="OrdersClosed" fill="#134E48" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default VSPeriodCard;
