import { useState } from "react";
import { IconArrowDown } from "../../icons/IconArrowDown";
import clsx from "clsx";
import { optionsFocusTime } from "../../config/pomoclock";
import { useSettingContext } from "../../hooks/useSettingContext";

export function OpenConfig() {
  const { setPreferenceFocusTime, preferenceFocusTime, } = useSettingContext();

  const [isOpen, setIsOpen] = useState(false);


  return (
    <div
      className={clsx(
        "flex min-h-8 w-30 flex-col items-center justify-center overflow-hidden rounded-sm border-white bg-[#2a2a2ab5] shadow-xs ",
        !isOpen && "hover:bg-card"
      )}
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        Object.entries(optionsFocusTime).map(([key, value]) => (
          <div
            key={key}
            onClick={() => setPreferenceFocusTime(parseInt(value, 10))}
            className="h-8 w-full cursor-pointer p-1"
          >
            {parseInt(value, 10) == preferenceFocusTime ? (
              <div className="bg-card flex h-full w-full items-center justify-start rounded-sm ">
                <div className="w-1 h-[60%] bg-primary rounded-sm "/>
                <div className="w-full flex items-center justify-center"> {value} </div>
                
              </div>
            ) : (
              <div className="hover:bg-card flex h-full w-full items-center justify-center hover:rounded-sm">
                {value}
              </div>
            ) }
            
          </div>
        ))
      ) : (
        <div className="flex flex-row items-center justify-center">
          <div>{preferenceFocusTime} minutes</div>
          <IconArrowDown width={20} height={20} color="white" />
        </div>
      )}
    </div>
  );
}
