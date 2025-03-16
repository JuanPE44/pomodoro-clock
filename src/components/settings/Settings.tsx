import ContainerSection from "../ui/ContainerSection";
import { useState } from "react";
import { useSettingContext } from "../../hooks/useSettingContext";
import { OpenConfig } from "./OpenConfig";
import { optionsFocusTime } from "../../config/pomoclock";
import { optionsRestTime } from "../../config/pomoclock";
import Icon from "../../icons/Icon";

function Settings() {
  const [openFocus, setOpenFocus] = useState(false);
  const {
    setPreferenceFocusTime,
    preferenceFocusTime,
    preferenceRestTime,
    setPreferenceRestTime,
  } = useSettingContext();

  return (
    <ContainerSection>
      <div className="flex h-full w-full flex-col">
        <h1 className="mb-5 text-4xl text-white">Settings</h1>
        <div className="flex h-[30%] w-full flex-col">
          <h3 className="text-m text-white">Account</h3>
          <div className="bg-card relative flex flex-row items-center justify-start rounded-sm">
            <div className="m-3 h-[10vh] w-[10vh] rounded-full bg-white"></div>
            <div className="flex flex-col items-start justify-center">
              <p className="text-m font-semibold text-white">Leo Messi</p>
              <p className="text-sm text-white">elcapitan10@gmail.com</p>
              <button className="text-sm text-white">Manage</button>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full flex-col">
          <h3 className="text-m text-white">Focus Sessions</h3>
          <div className="relative flex w-full flex-col items-start justify-center rounded-sm">
            <div
              className="bg-card flex w-full flex-row items-center gap-2 rounded-sm p-2"
              onClick={() => setOpenFocus(!openFocus)}
            >
              <Icon name="focusSessions" size={20} />
              <div className="m-3 flex flex-col">
                <h3 className="text-sm text-white">Periodo de Concentracion</h3>
                <p className="text-xs text-white">
                  Ajusta las duraciones de las sesions de tu tiempo de enfoque o
                  de las interrupciones para que se adapten a tus necesidades
                </p>
              </div>
            </div>

            {openFocus && (
              <div className="animate-open-options absolute top-[100%] left-0 mt-1 flex w-full scale-100 flex-col items-center rounded-sm opacity-100">
                <div className="bg-card mb-1 flex w-full items-center rounded-sm p-3 pl-10 text-sm text-white">
                  <div className="w-1/3">Periodo de Enfoque</div>

                  <div className="flex w-full items-center justify-end">
                    <OpenConfig
                      optionSetting={optionsRestTime}
                      preferenceTime={preferenceRestTime}
                      setPreference={setPreferenceRestTime}
                    ></OpenConfig>
                  </div>
                </div>
                <div className="bg-card flex w-full items-center rounded-sm p-3 pl-10 text-sm text-white">
                  <div className="w-1/3">Periodo de Descanso</div>

                  <div className="flex w-full items-center justify-end">
                    <OpenConfig
                      optionSetting={optionsFocusTime}
                      preferenceTime={preferenceFocusTime}
                      setPreference={setPreferenceFocusTime}
                    ></OpenConfig>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ContainerSection>
  );
}

export default Settings;
