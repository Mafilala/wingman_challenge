"use client";
import { icons } from "@/icons/icons";
import { Separator } from "./ui/separator";
import SidebarItem from "./sidebarItem";
import { useState } from "react";

type IconNameType = keyof typeof icons;

const sidebarItems: IconNameType[] = ["home", "chat", "chats"];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const Logo = icons.logo;
  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="hidden sm:flex flex-col justify-between items-center  h-screen py-6 px-4 bg-[#115E56]  border-r-[1px] border-[#DCDFE4">
      <div className="flex flex-col gap-[30px]">
        
      <Logo />
      <Separator orientation="horizontal" className="bg-[#134E48]" />
      {sidebarItems.map((icon, index) => (
        <SidebarItem
          index={index}
          key={index}
          iconName={icon}
          isActive={index === activeIndex}
          handleClick={handleItemClick}
        />
      ))}
      </div>
      <SidebarItem
        index={sidebarItems.length}
        iconName="settings"
        isActive={activeIndex === sidebarItems.length}
        handleClick={handleItemClick} />
    </div>
  );
};
export default Sidebar;
