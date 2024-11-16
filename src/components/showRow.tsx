import React, { useEffect, useState } from "react";
import ImageGrid from "./content";

// Removed `headers` since it was unused
const ShowRow: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [selectedValue, setSelectedValue] = useState<number>(1);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    setIsDarkMode(mediaQuery.matches);

    // Renamed to avoid conflict with the `handleChange` for `selectedValue`
    const handleMediaChange = (e: MediaQueryListEvent) =>
      setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  const handleChange = (value: number) => setSelectedValue(value);

  const getBorderColor = () => (isDarkMode ? "gray" : "black");

  return (
    <div>
      <h3>Select an image</h3>
      <ImageGrid />

      {/* Example of using `selectedValue` */}
      <div>
        <label htmlFor="valueSelect">Choose a value:</label>
        <select
          id="valueSelect"
          value={selectedValue}
          onChange={(e) => handleChange(parseInt(e.target.value))}
          style={{ borderColor: getBorderColor() }}
        >
          <option value={1}>Option 1</option>
          <option value={2}>Option 2</option>
          <option value={3}>Option 3</option>
        </select>
      </div>
    </div>
  );
};

export default ShowRow;
