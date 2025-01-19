"use client";
import { icons } from "@/icons/detailIcons";
import { Card, CardContent, CardHeader } from "./ui/card";

const Content = ({
  delta,
  trend,
  content,
}: {
  delta: number;
  trend: "increase" | "decrease";
  content: string;
}) => {
  const sign = trend === "increase" ? "+" : "-";
  const Icon = trend === "increase" ? icons.increase : icons.decrease;
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <h2 className="text-[56px] text-white leading-[67px]">{`${sign}${delta}%`}</h2>
        <Icon pathFill="white" width={34} height={34} />
      </div>
      <p className="text-sm text-white leading-5 font-normal">{content}</p>
    </div>
  );
};

const ForecastCard = () => {
  const Icon = icons.miniChat;
  return (
    <Card className="relative overflow-hidden max-w-[270px]">
      <div className="absolute w-56 aspect-square -top-24 -left-24 rounded-full bg-gradient-to-br from-[#15B79F] to-[#12A591] z-40"></div>

      <div className="absolute w-96 aspect-square -top-40 -left-40 rounded-full bg-gradient-to-br from-[#15B79F] to-[#12A591] z-30 "></div>

      <div className="absolute w-[440px] aspect-square -top-32 -left-32 rounded-full bg-gradient-to-br from-[#12A591] to-[#109C8A] z-20"></div>

      <div className="absolute w-[440px] aspect-square rounded-full  -left-20 bg-gradient-to-br from-[#109C8A] to-[#0E9382] z-10"></div>

      <CardHeader className="z-50">
        <div className="flex justify-start items-center gap-2 z-50">
          <Icon pathFill="#CCFBEF" />
          <p className="text-[#CCFBEF] uppercase text-xs z-50">Forecast</p>
        </div>
      </CardHeader>
      <CardContent className="z-50 relative flex flex-col gap-2">
        <Content
          delta={15}
          trend="increase"
          content="orecasted increase in your sales closed by the end of the current month"
        />

        <Content
          delta={20}
          trend="increase"
          content="forecasted increase in consultations by the end of the current month"
        />
      </CardContent>
    </Card>
  );
};
export default ForecastCard;
