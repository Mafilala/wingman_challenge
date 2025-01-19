import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { icons } from "@/icons/detailIcons";
export type IconNameType = keyof typeof icons

const InfoCard = ({title, value, change, trend, iconName}: {title: string, value: string, change: string, trend: "increase" | "decrease", iconName:IconNameType }) => {
  const UpIcon = icons.increase;
  const DownIcon = icons.decrease;
  const Icon = trend === 'increase' ? UpIcon : DownIcon;
  const MainIcon = icons[iconName];
  const color = trend === "increase" ? "15B79F" : "red";
  return (
    <Card className="min-w-[180px] h-[126px] md:h-[140px] flex flex-col gap-2 justify-between p-4 md:p-6 ">
      <CardHeader className="p-0">
        <CardTitle>
          <div className="flex gap-2 items-center">
            <MainIcon />
            <span className="text-[10px] md:text-xs tracking-wider uppercase font-semibold text-[#667085]">
              {title}
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 text-[25px] md:text-[32px]">{value}</CardContent>
      <CardFooter className="p-0">
        <div className="flex items-center justify-center gap-2">
          <Icon />
          <p className="font-normal text-[#667085] text-xs md:text-sm">
            <span style={{color: color}} className="mr-1">{change}</span>{trend}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};
export default InfoCard;
