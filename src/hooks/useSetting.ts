
import { useState, useEffect } from "react";

export function useSetting() {
    const storedPreferenceFocusTime: number = parseInt(localStorage.getItem('preferenceFocusTime') || '0', 10);
    const storedPreferenceRestTime: number = parseInt(localStorage.getItem('preferenceRestTime') || '0', 10);
    const [preferenceFocusTime, setPreferenceFocusTime] = useState(storedPreferenceFocusTime);
    const [preferenceRestTime, setPreferenceRestTime] = useState(storedPreferenceRestTime);
   
    
    useEffect(() => {
        localStorage.setItem('preferenceFocusTime', preferenceFocusTime.toString());
      }, [preferenceFocusTime]);

      useEffect(() => {
        localStorage.setItem('preferenceRestTime', preferenceRestTime.toString());
      }, [preferenceRestTime]);

    return {
        preferenceFocusTime,
        setPreferenceFocusTime,
        preferenceRestTime,
        setPreferenceRestTime
    };
}