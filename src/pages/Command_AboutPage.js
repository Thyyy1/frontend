import React from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar_AboutPage_Component";
import commands from "../data/command.json";

const renderCommandList = () => {
  return (
    <ul>
      {commands.map((command, index) => (
        <li key={index} className="justify-center h-10 pt-1 pl-12 mb-2 text-xl font-medium text-black border-black rounded-sm min-h-12 bg-gray">
          <span className="text-xl font-medium">{command.command}:</span>{" "}
          {command.description}
        </li>
      ))}
    </ul>
  );
};

const CommandListPage = () => {
  return (
    <div className="min-h-screen text-white bg-background-color">
      <div className="sticky top-0 z-10">
        <Navigation />
      </div>
      <div className="flex flex-col px-4 md:flex-row md:px-14">
        <div className="w-full md:w-1/4">
          <Sidebar />
        </div>
        <div className="relative w-full px-4 py-8 md:w-3/4 md:py-0">
          <div className="absolute top-0 left-0 w-1 h-full bg-purple-600 line"></div>
          <section className="mt-8" id="command-list">
            <h3 className="mb-4 text-4xl font-bold font-ibm">LIST OF COMMANDS</h3>
          
            {renderCommandList()}
          </section>
        </div>
      </div>
    </div>
  );
};

export default CommandListPage;
