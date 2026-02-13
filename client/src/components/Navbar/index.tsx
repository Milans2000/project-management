"use client";

import React from "react";
import Link from "next/link";
import { Menu, Moon, Search, Settings, Sun } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state)=>state.global.isSidebarCollapsed);
  const isDarkMode = useAppSelector((state)=> state.global.isDarkMode);
  return (
    <div className="flex items-center justify-between bg-white px-6 py-3 dark:bg-black">
      <div className="flex items-center gap-8">
        {!isSidebarCollapsed ? null : (
          <button onClick={()=> dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}>
            <Menu className="h-8 w-8 dark:text-white"/>
          </button>
        )}
      </div>

      {/* LEFT SIDE - SEARCH */}
      <div className="relative w-[220px]">
        <Search className="absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 dark:text-white" />

        <input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-gray-100 p-2 pl-9 text-sm 
                     placeholder-gray-500 focus:outline-none 
                     focus:ring-2 focus:ring-gray-300 
                     dark:bg-gray-700 dark:text-white"
        />
      </div>

      {/* RIGHT SIDE - SETTINGS */}
      <div className="flex items-center">
        <button 
          onClick={()=> dispatch(setIsDarkMode(!isDarkMode))}
          className={
            isDarkMode
              ? `rounded-full p-2  dark:hover:bg-gray-700`
              : `rounded-full p-2 hover:bg-gray-100 `
          }
          >
            {isDarkMode ? (
              <Sun className="h-6 w-6  cursor-pointer dark:text-white" />
            ): (
              <Moon className="h-6 w-6 cursor-pointer dark:text-white" />
            )}
          </button>
        <Link
          href="/settings"
          className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Settings className="h-6 w-6 text-gray-700 cursor-pointer dark:text-white" />
        </Link>

        <div className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
      </div>

    </div>
  );
};