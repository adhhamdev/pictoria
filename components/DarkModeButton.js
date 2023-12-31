"use client"
import { useState } from 'react';
import { MoonIcon } from '@heroicons/react/24/solid';

const DarkModeButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="darkModeToggle">
      <MoonIcon />
      <label className={`darkModeBtn ${isChecked ? 'checked' : ''}`} htmlFor="toggleCheckbox">
        <input
          type="checkbox"
          id="toggleCheckbox"
          checked={isChecked}
          onChange={handleToggle}
          aria-label="Toggle Dark Mode"
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default DarkModeButton;