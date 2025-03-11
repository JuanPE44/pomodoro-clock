
import { useState, useEffect } from "react";

export function useSetting() {
    const storedPreferenceTime: number = parseInt(localStorage.getItem('preferenceTime') || '0', 10);
    const [preferenceFocusTime, setPreferenceFocusTime] = useState(storedPreferenceTime);
    const [preferenceRestTime, setPreferenceRestTime] = useState(0);
   
    
    useEffect(() => {
        localStorage.setItem('preferenceTime', preferenceFocusTime.toString());
      }, [preferenceFocusTime]);

    return {
        preferenceFocusTime,
        setPreferenceFocusTime,
        preferenceRestTime,
        setPreferenceRestTime
    };
}