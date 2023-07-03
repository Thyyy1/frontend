import React from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar_AboutPage_Component";
import commands from "../data/command.json";

const renderCommandList = () => {
  return (
    <ul>
      {commands.map((command, index) => (
        <table class="w-full">
          <li key={index} className="mb-4 text-2xl">
            <span className="text-2xl font-bold">{command.command}:</span>{" "}
            {command.description}
          </li>
        </table>
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
      <div className="flex flex-col px-4 mt-16 md:flex-row md:px-14">
        <div className="w-full mt-12 md:w-1/4">
          <Sidebar />
        </div>
        <div className="relative w-full py-8 pl-16 pr-32 md:w-3/4 md:py-0">
          <div className="absolute top-0 left-0 w-1 h-full bg-purple-600 line"></div>
          <section className="mt-16">
            <h3 className="w-11/12 pt-2 pl-12 mb-2 text-3xl font-medium border-black rounded-sm h-14 text-description-color bg-purple">MEET OUR TEAM </h3>
            <div></div>
            <div></div>
            <div></div>
  
          </section>
        </div>
      </div>
    </div>
  );
};

export default CommandListPage;
