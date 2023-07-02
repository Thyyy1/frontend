import React from "react";
import commandsData from "../data/command.json";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar_AboutPage_Component";

const AboutPage = () => {
  return (
    <div className="min-h-screen text-white bg-background-color">
      <div className="sticky top-0 z-10">
        <Navigation />
      </div>
      <div className="flex flex-col px-4 my-16 md:flex-row md:px-14">
        <div className="w-full md:w-1/4">
          <Sidebar />
        </div>
        <div className="relative w-full py-8 pl-16 pr-32 md:w-3/4 md:py-0">
          <div className="absolute top-0 left-0 w-1 h-full bg-purple-600 line"></div>
          <section className="mt-8" id="quick-start">
            <h3 className="mb-6 text-4xl font-bold uppercase">
              Welcome to PIU Discord bot
            </h3>
            <p className="pr-32 mb-6 mr-32 text-2xl leading-normal uppercase text-description-color">
              Here is the full documentation of PIU discord bot instructions, configuration, and more. Integrate the PIU Discord bot into your Discord server and get started.
            </p>
            <h3 className="mb-4 text-4xl font-bold">Purpose</h3>
            <p className="pr-32 mb-6 mr-32 text-2xl leading-normal uppercase text-description-color">
              The purpose of the PIU Discord bot is to provide users with a wide
              range of features, such as music playback, moderation, and various
              utility commands to improve server management.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
