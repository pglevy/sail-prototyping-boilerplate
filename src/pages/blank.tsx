import { useState } from "react";
import { ApplicationHeader, SideNav } from "../components";

function Blank() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedPage, setSelectedPage] = useState("plan");
  return (
    <div className="min-h-screen bg-sail-bg-page">
      <ApplicationHeader />

      <div className="flex">
        <SideNav selectedPage={selectedPage} onPageChange={setSelectedPage} />
        <div></div>
      </div>
    </div>
  );
}

export default Blank;
