import { CardType } from "@/app/page";
const data: {cards: CardType[]} = {
  cards: [
    { title: "Consultations", value: "24", change: "+15%", trend: "increase", iconName:"miniChat" },
    { title: "Orders Placed", value: "12", change: "-15%", trend: "decrease", iconName: "miniTag"},
    { title: "Conversion", value: "50%", change: "-15%", trend: "decrease", iconName:"tick" },
    {
      title: "Total Sales Value",
      value: "$2,400",
      change: "+15%",
      trend: "increase",
      iconName: "doubleCoin"
    },
    {
      title: "Avg Order Value",
      value: "$240",
      change: "+15%",
      trend: "increase",
      iconName: "coin"
    },
    {
      title: "Commission Paid",
      value: "$240",
      change: "+15%",
      trend: "increase",
      iconName: "piggyBank"
    },
  ],
};

export default data;
