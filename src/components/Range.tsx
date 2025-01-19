import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Range = () => {
  return (
    <Select>
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="7 days" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="7 days">7 days</SelectItem>
        <SelectItem value="1 Month">1 Month</SelectItem>
        <SelectItem value="3 Months">3 Months</SelectItem>
      </SelectContent>
    </Select>
  );
};
export default Range;
