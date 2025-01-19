import { icons } from "@/icons/icons";
import path from "path";
type IconNameType = keyof typeof icons;

const SidebarItem = ({
  index,
  isActive,
  iconName,
  handleClick,
}: {
  index: number;
  isActive: boolean;
  iconName: IconNameType;
  handleClick: (idx: number) => void;
}) => {
  const Icon = icons[iconName];
  return (
    <div onClick={() => handleClick(index)} className="cursor-pointer">
      <Icon
        rectFill={isActive ? "white" : "#115E56"}
        pathFill={isActive ? "#115E56" : "white"}
      />
    </div>
  );
};
export default SidebarItem;
