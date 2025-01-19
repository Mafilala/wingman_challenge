"use client";
import HeaderItem from "./HeaderItem";
import { useState } from "react";

type HeaderItemType = {
  text: string;
  iconName: "tag" | "headerChat" | "pieChart" | "home" | "chat" | "chats";
};

const headerItems: HeaderItemType[] = [
  { text: "Summary", iconName: "pieChart" },
  { text: "Sales", iconName: "tag" },
  { text: "Chats", iconName: "headerChat" },
];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="flex justify-start gap-2 w-full  py-6 px-10  border-b-[1px] border-[#DCDFE4]">
      {headerItems.map((item, index) => (
        <HeaderItem
          key={index}
          text={item.text}
          iconName={item.iconName}
          isActive={index === activeIndex}
          handleClick={handleItemClick}
          index={index}
        />
      ))}
    </div>
  );
};
export default Header;
