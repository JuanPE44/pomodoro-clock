import { IconFocusSessions } from "../../icons/IconFocusSession";
import ContainerSection from "../ui/ContainerSection";
import { useState } from "react";


function Settings() {
  const [openFocus, setOpenFocus] = useState(false);

  return (
    <ContainerSection>
      <div className="w-full h-full flex flex-col">
      <h1 className="text-4xl text-white">Settings</h1>
      <div className="w-full h-[30%] flex flex-col  ">
        <h3 className="text-m text-white">Account</h3>
        <div className="flex flex-row items-center justify-start bg-card rounded-sm relative ">
          <div className="w-[10vh] h-[10vh] bg-white rounded-full m-3"></div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-m text-white font-semibold">Leo Messi</p>
            <p className="text-sm text-white">elcapitan10@gmail.com</p>
            <button className="text-sm text-white">Manage</button>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col ">
        <h3 className="text-m text-white">Focus Sessions</h3>
        <div className="w-full h-[30%] rounded-sm flex flex-col items-start justify-center relative" > 
          <div className="flex w-full h-[40%] flex-row items-center bg-card rounded-sm p-3" onClick={() => setOpenFocus(!openFocus)}>
            <IconFocusSessions width={20} height={20} color="white"/>
            <div className=" flex flex-col m-3">
              <h3 className="text-sm text-white">Periodo de Concentracion</h3>
              <p className="text-xs text-white">Ajusta las duraciones de las sesions de tu tiempo de enfoque o de las interrupciones para que se adapten a tus necesidades</p>
            </div>
          </div>

          
            {openFocus && (
              <div 
                className="flex w-full h-[65%] flex-col items-center  rounded-sm mt-1 absolute top-[70%] left-0" > 
                <div className=" w-full h-[50%] bg-card rounded-sm pl-10 flex items-center text-white text-sm mb-0.5">Periodo de Enfoque</div>
                <div className=" w-full h-[50%] bg-card rounded-sm pl-10 flex items-center text-white text-sm">Periodo de descanso</div>                  
                  
                
              </div>
            )}
            
        </div>
        

      </div>
      </div>
      
    </ContainerSection>
  );
}

export default Settings;
