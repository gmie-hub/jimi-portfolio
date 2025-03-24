import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Lyte Wallet",
    description:
      "Developed a cryptocurrency wallet with real-time currency swap, send and receiving, with automated rate updates, and transaction tracking.",
    getImageSrc: "/lyte-app.png",
    redirectUrl: "https://lytewallet.io/",
  },
  {
    title: "Intaglio",
    description:
      "Created a mentoring web app for dentists, facilitating seamless mentor-mentee interactions.",
    getImageSrc: "/intaglio.png",
    redirectUrl: "https://www.intagl.io/",
  },
  {
    title: "CIPM Application Portal",
    description:
      "Designed an interactive system for applicant management, simplifying professional membership applications.",
    getImageSrc: "/application.png",
    redirectUrl: "https://application.cipmnigeria.org/",
  },
  {
    title: "Chattered Institute of Personnel Management (CIPM) Exam Portal",
    description:
      "Developed a seamless online exam platform for CIPM candidates, optimizing user experience and functionality.",
    getImageSrc: "/cipm.png",
    redirectUrl: "https://exams.cipmnigeria.org/",
  },
  {
    title: "Chattered Institute of Personnel Management (CIPM) E-voting App",
    description:
      "Built secure voting and admin dashboards to streamline professional election processes. 🔥️",
    getImageSrc: "/e-voting.png",
  },
];

const handleRedirect = (url) => {
  window.open(url, "_blank");
}

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section" fontFamily="Lato">
        Featured Projects
      </Heading>

      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc}
            onClick={() => handleRedirect(project.redirectUrl)}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
