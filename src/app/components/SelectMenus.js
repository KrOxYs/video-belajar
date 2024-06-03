import * as Select from "@radix-ui/react-select";
import React, { useState } from "react";

export default function SelectMenus() {
  const [selectedItemIdx, setSelectedItemIdx] = useState(0);

  const menuItems = [
    {
      label: "+62",
      name: "Indonesia",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/1280px-Flag_of_Indonesia.svg.png",
    },
    {
      name: "United States",
      label: "+1",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Flag_of_the_United_States_%281877%E2%80%931890%29.svg/2560px-Flag_of_the_United_States_%281877%E2%80%931890%29.svg.png",
    },
  ];

  return (
    <Select.Root
      onValueChange={setSelectedItemIdx}
      defaultValue={menuItems[selectedItemIdx].label}
    >
      <div className="">
        <Select.Trigger className="w-full inline-flex items-center justify-between px-1 py-1 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
          <Select.Value placeholder="">
            <div className="flex items-center gap-2 mr-10">
              <img
                src={menuItems[selectedItemIdx].avatar}
                className="w-10 h-8 rounded-md"
              />
              <div className="flex-1 text-left flex items-center gap-x-1">
                {/* {menuItems[selectedItemIdx].name} */}
                <span>{menuItems[selectedItemIdx].label}</span>
              </div>
            </div>
          </Select.Value>
          <Select.Icon className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            position="popper"
            avoidCollisions={false}
            className="w-full max-h-64 mt-3 overflow-y-auto bg-white border rounded-lg shadow-sm text-sm"
          >
            <Select.Viewport className="">
              {menuItems.map((item, idx) => (
                <SelectItem key={idx} value={idx}>
                  <img src={item.avatar} className="w-5 h-5 rounded-full" />
                  <div className="flex-1 text-left flex items-center gap-x-1">
                    {item.name}
                    <span className="text-sm">{item.label}</span>
                  </div>
                </SelectItem>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </div>
    </Select.Root>
  );
}

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    // If you want to make this component more customizable you can use classnames and tailwind-merge library.
    return (
      <Select.Item
        className="flex items-center justify-between px-3 cursor-default py-2 duration-150 text-gray-600 data-[state=checked]:text-indigo-600 data-[state=checked]:bg-indigo-50 data-[highlighted]:text-indigo-600 data-[highlighted]:bg-indigo-50 data-[highlighted]:hover:text-indigo-600 data-[highlighted]:hover:bg-indigo-50 outline-none"
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>
          <div className="pr-4 line-clamp-1 flex items-center gap-2">
            {children}
          </div>
        </Select.ItemText>
        <div className="w-6">
          <Select.ItemIndicator>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-indigo-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>{" "}
          </Select.ItemIndicator>
        </div>
      </Select.Item>
    );
  }
);
