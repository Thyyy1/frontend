import React from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar_AboutPage_Component";
import commands from "../data/command.json";

const renderCommandList = () => {
  return (
    <ul>
      {commands.map((command, index) => (
        <li key={index} className="mb-4 text-2xl">
          <span className="font-bold text-2xl">{command.command}:</span>{" "}
          {command.description}
        </li>
      ))}
    </ul>
  );
};

const CommandListPage = () => {
  return (
    <div className="min-h-screen bg-background-color text-white">
      <div className="sticky top-0 z-10">
        <Navigation />
      </div>
      <div className="flex flex-col md:flex-row px-4 md:px-14">
        <div className="w-full md:w-1/4">
          <Sidebar />
        </div>
        <div className="w-full md:w-3/4 px-4 py-8 md:py-0 relative">
          <div className="line absolute left-0 top-0 bg-purple-600 h-full w-1"></div>
          <section className="mt-8" id="command-list">
            <h3 className="text-4xl font-bold mb-4">LIST OF COMMANDS</h3>
            <p className="mb-4">
              Here you can find a list of available commands for the bot.
            </p>
            {renderCommandList()}
          </section>
        </div>
      </div>
    </div>
  );
};

export default CommandListPage;
