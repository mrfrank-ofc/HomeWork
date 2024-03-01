import React, { useEffect, useState } from "react";
import { Classic } from "@theme-toggles/react";
import "@theme-toggles/react/css/Classic.css"

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
   
      <Classic toggled={theme === "dark"} toggle={toggleTheme} duration={750} placeholder={undefined} style={{fontSize:50}}/>
   
  );

};

export default ThemeToggle;
