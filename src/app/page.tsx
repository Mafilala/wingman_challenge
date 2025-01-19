import InfoCard from "@/components/InfoCard";
import data from "../data/fake_data";
import { icons } from "@/icons/detailIcons";
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Range from "@/components/Range";
export type DetailIconType = keyof typeof icons;
export type CardType = {
  title: string;
  value: string;
  change: string;
  trend: "increase" | "decrease";
  iconName: DetailIconType;
};

const VSPeriodCard = dynamic(() => import("@/components/barChart"), {
  ssr: false,
});

const ConsultationsChart = dynamic(() => import("@/components/lineChart"), {
  ssr: false,
});

const ForecastCard = dynamic(() => import("@/components/ForecastCard"), {
  ssr: false,
});

const Table = dynamic(() => import("@/components/Table"), {
  ssr: false,
});

export default function Home() {
  const cards: CardType[] = data.cards;
  return (
    <main className="sm:p-8">
      <Card className="">
        <CardHeader className="flex flex-row justify-between">
          <CardTitle className="text-[#212636] font-medium text-xl md:text-3xl">
            At a glance
          </CardTitle>
          <Range />
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid  grid-flow-col auto-rows-[156px] grid-rows-2 gap-4 md:gap-6 p-4 w-full overflow-x-scroll">
            {cards.map((d, i) => (
              <InfoCard key={d.title} {...d} />
            ))}
          </div>
        </CardContent>
        <CardContent className="p-0">
          <CardHeader className="">
            <CardTitle className="text-[#212636] font-medium text-xl md:text-3xl">
              Insights
            </CardTitle>
          </CardHeader>{" "}
          <div className="w-full flex flex-col items-center sm:grid grid-cols-2 lg:grid-cols-4 p-4 gap-4">
            <ConsultationsChart />
            <div className="flex flex-col  sm:flex sm:flex-row sm:justify-center sm:w-full sm:col-span-2  gap-4 w-fit lg:grid lg:grid-cols-2">
              <VSPeriodCard />
              <ForecastCard />
            </div>
          </div>
        </CardContent>
        <CardContent className="p-4">
          <CardHeader className="p-0 pb-8">
            <CardTitle className="text-[#212636] font-medium text-xl md:text-3xl">
              Orders
            </CardTitle>
          </CardHeader>{" "}
          <Table />
        </CardContent>
      </Card>
    </main>
  );
}
