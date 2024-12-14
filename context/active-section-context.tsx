"use client";

import React, { useState, createContext, useContext, useMemo } from "react";
import type { SectionName } from "@/lib/types";

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType>({
  activeSection: "Home",
  setActiveSection: () => {},
  timeOfLastClick: 0,
  setTimeOfLastClick: () => {},
});

type ActiveSectionContextProviderProps = React.PropsWithChildren<{}>;

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>(() => "Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(() => Date.now());

  const value = useMemo(
    () => ({
      activeSection,
      setActiveSection,
      timeOfLastClick,
      setTimeOfLastClick,
    }),
    [activeSection, timeOfLastClick]
  );

  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}

export function useActiveSection() {
  const { activeSection, setActiveSection } = useActiveSectionContext();
  return { activeSection, setActiveSection };
}

export function useTimeOfLastClick() {
  const { timeOfLastClick, setTimeOfLastClick } = useActiveSectionContext();
  return { timeOfLastClick, setTimeOfLastClick };
}
