import { useState } from "react";

export function OpenConfig() {
  const optionsTime: { [key: number]: string } = {
    30: "30 min",
    45: "45 min",
    50: "50 min",
    55: "55 min",
    60: "60 min",
  };

  const [isOpen, setIsOpen] = useState(false);
  const [preferenceTime, setPreferenceTime] = useState(optionsTime[30]);

  return (
    <div
      className="flex min-h-5 min-w-20 flex-col items-center justify-center rounded-sm border-white bg-[#2a2a2ab5] shadow-xs"
      onClick={() => setIsOpen(!isOpen)} 
    >
      {isOpen ? (
      
         Object.entries(optionsTime).map(([key, value]) => (
          <div
            key={key}
            onClick={() => setPreferenceTime(value)} 
            className="w-full h-full cursor-pointer"
          >
            <div className="w-full h-full hover:bg-card flex items-center justify-center">
                {value}
            </div>
            
          </div>
        ))
      ) : (
        
        <div>{preferenceTime}</div>
      )}
    </div>
  );
}
