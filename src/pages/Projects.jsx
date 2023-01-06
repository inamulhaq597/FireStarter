import React from "react";
import Completed from "../components/Projects/Completed ";

import ProjectMainSection from "../components/Projects/ProjectMainSection";
import SubCard from "../components/Projects/SubCard";
import Upcoming from "../components/Projects/Upcoming";

const Projects = () => {
  return (
    <>
      <ProjectMainSection></ProjectMainSection>
      <SubCard></SubCard>
      <Upcoming></Upcoming>
      <Completed></Completed>
    </>
  );
};

export default Projects;
