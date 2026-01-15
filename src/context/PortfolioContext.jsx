import { createContext, useContext, useState } from "react";
import { PROFILE, PROJECTS, EXPERIENCE, SKILLS } from "../lib/data";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  // 🟢 CHANGE: Default is now "home" so nothing shows initially (clean start)
  const [activeTab, setActiveTab] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  const value = {
    profile: PROFILE,
    projects: PROJECTS,
    experience: EXPERIENCE,
    skills: SKILLS,
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);