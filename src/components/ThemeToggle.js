import React, { useState } from "react";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-button flex items-center justify-center"
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        "☀️" // Moon Emoji
      ) : (
        "🌙" // Sun Emoji
      )}
    </button>
  );
}

export default ThemeToggle;
