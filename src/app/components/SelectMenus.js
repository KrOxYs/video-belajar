import React from "react";
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { userData } from "../utils/data";

export default function SelectMenus() {
  const users = [
    {
      id: 1,
      name: "+62",
      avatar:
        "https://media.istockphoto.com/id/857526554/vector/indonesia-flag-vector-flat-icon.jpg?s=612x612&w=0&k=20&c=kN7mCmg-wyojzsLvTjSgAUHxxWjl3bDscvmLhsVXJxM=",
      email: "ID",
    },
    {
      id: 2,
      name: "+20",

      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/640px-Flag_of_Singapore.svg.png",
      email: "SGP",
    },
  ];
  // const users = userData();
  return (
    <Select
      items={users}
      aria-labelledby="select-menu"
      label=""
      placeholder="Select a user"
      labelPlacement="outside"
      variant="bordered"
      classNames={{
        base: "w-64 sm:w-80",
        trigger: "h-11",
        listboxWrapper: "w-full",
        listbox: "w-full",
      }}
      renderValue={(items) => {
        return items.map((item) => (
          <div
            key={item.key}
            className="flex items-center gap-2 bg-transparent"
          >
            <Avatar
              alt={item.data.name}
              className="flex-shrink-0"
              size="sm"
              src={item.data.avatar}
            />
            <div className="flex flex-col">
              <span>{item.data.name}</span>
              {/* <span className="text-default-500 text-tiny">
                ({item.data.email})
              </span> */}
            </div>
          </div>
        ));
      }}
    >
      {(user) => (
        <SelectItem key={user.id} textValue={user.name}>
          <div className="flex gap-2 items-center">
            <Avatar
              alt={user.name}
              className="flex-shrink-0"
              size="md"
              src={user.avatar}
            />
            <div className="flex flex-col">
              <span className="text-small">{user.name}</span>
              <span className="text-tiny text-default-400">{user.email}</span>
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  );
}
