import { useState } from "react";
import Icon from "../../icons/Icon";

interface Props {
  optionSetting: { [key: number]: string };
  setPreference: React.Dispatch<React.SetStateAction<number>>;
  preferenceTime: number;
}

export function OpenConfig({
  optionSetting,
  setPreference,
  preferenceTime,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`absolute z-20 flex min-h-8 w-30 flex-col items-center justify-center overflow-hidden rounded-sm border-white bg-[#2a2a2ab5] shadow-xs ${!isOpen && "hover:bg-card"}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        Object.entries(optionSetting).map(([key, value]) => (
          <div
            key={key}
            onClick={() => setPreference(parseInt(value, 10))}
            className="h-8 w-full cursor-pointer p-1"
          >
            {parseInt(value, 10) == preferenceTime ? (
              <div className="bg-card flex h-full w-full items-center justify-start rounded-sm">
                <div className="bg-primary h-[60%] w-1 rounded-sm" />
                <div className="flex w-full items-center justify-center">
                  {value}
                </div>
              </div>
            ) : (
              <div className="hover:bg-card flex h-full w-full items-center justify-center hover:rounded-sm">
                {value}
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="flex flex-row items-center justify-center">
          <div>{preferenceTime} minutes</div>
          <Icon name="arrowDown" size={20} />
        </div>
      )}
    </div>
  );
}
