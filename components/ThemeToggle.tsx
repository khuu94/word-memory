"use client";

import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import SideBarIcon from "./SidebarIcon";

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div onClick={toggleDarkMode}>
            <SideBarIcon
                icon={
                    <div
                        className={`transition-transform transform ${
                            darkMode ? "rotate-180" : "rotate-0"
                        }`}
                    >
                        {darkMode ? (
                            <MdLightMode size="22" />
                        ) : (
                            <MdDarkMode size="22" />
                        )}
                    </div>
                }
                text="Mode"
            />
        </div>
    );
}
