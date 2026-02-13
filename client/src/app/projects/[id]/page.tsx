"use client";

import { useState } from "react";
import ProjectHeader from "@/components/ProjectHeader";

export default function ProjectPage() {
  const [activeTab, setActiveTab] = useState("Board");

  return (
    <div className="p-6">
      <ProjectHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="mt-4">
        {activeTab === "Board" && <div>Board View</div>}
        {activeTab === "List" && <div>List View</div>}
        {activeTab === "Timeline" && <div>Timeline View</div>}
        {activeTab === "Table" && <div>Table View</div>}
      </div>
    </div>
  );
}
