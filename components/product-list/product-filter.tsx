import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProductFilter() {
  return (
    <div className="flex flex-wrap gap-4 w-full">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">Vegetables</SelectItem>
            <SelectItem value="apcple">Fruits</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Price" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">$10</SelectItem>
            <SelectItem value="appldse">$20</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Rating" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">1</SelectItem>
            <SelectItem value="apweple">2</SelectItem>
            <SelectItem value="apewple">3</SelectItem>
            <SelectItem value="appwwle">4</SelectItem>
            <SelectItem value="apprwle">5</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="flex gap-4 lg:ml-auto">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by:" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">Best</SelectItem>
              <SelectItem value="ewr">Latest</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Show" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">16</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
