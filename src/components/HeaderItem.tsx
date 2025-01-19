'use client'
import { icons } from "@/icons/icons";

export type IconNames = keyof typeof icons;

const HeaderItem = ({
  text,
  iconName,
  isActive,
  handleClick,
  index
}: {
  text: string;
  iconName: IconNames;
  isActive: boolean;
  handleClick: (idx:number) => void;
  index: number;
}) => {
  const Icon = icons[iconName];
  const pathFill = isActive ? "#212636" : "#8A94A6";
  const bg = isActive ? "#CCFBEF" : "transparent";
  return (
    <div
      className="flex justify-between items-center rounded-full px-3 py-3 gap-3 cursor-pointer"
      style={{ backgroundColor: bg }}
      onClick={() => handleClick(index)}
    >
      <Icon pathFill={pathFill} />
      <span className="text-[18px] leading-5">{text}</span>
    </div>
  );
};
export default HeaderItem;
