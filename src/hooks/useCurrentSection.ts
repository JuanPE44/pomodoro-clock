import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Section, SECTIONS } from "../config/sections";



export function useCurrentSection() {
  const [currentSection, setCurrentSection] = useState<Section | undefined>(undefined);
  const location = useLocation();

  useEffect(() => {
    const section = SECTIONS.find((section) => section.path === location.pathname);
    setCurrentSection(section);
  }, [location.pathname]);

  return {currentSection}
}