import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Card from "./Card";
import Reveal from "./Reveal";
import { projects } from "../data";
import { palette } from "../theme";

export const SectionLabel = ({ children }) => (
  <Flex align="center" gap={3} mb={5}>
    <Box w={6} h="1px" bg={palette.accent} />
    <Text fontSize="xs" letterSpacing="0.18em" textTransform="uppercase" color={palette.accent} fontWeight={600}>
      {children}
    </Text>
  </Flex>
);

const ProjectsSection = () => {
  const [featured, ...rest] = projects;

  return (
    <FullScreenSection
      id="projects-section"
      sx={{ scrollMarginTop: "40px" }}
      innerProps={{ py: { base: 20, md: 32 } }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "flex-end" }}
        gap={6}
        mb={{ base: 10, md: 16 }}
      >
        <Reveal>
          <SectionLabel>Selected work</SectionLabel>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight={600}
            letterSpacing="-0.04em"
            lineHeight={1}
          >
            Things I've{" "}
            <Text as="span" className="serif" color={palette.accent} fontSize="1.08em">
              built
            </Text>
          </Heading>
        </Reveal>
        <Reveal delay={0.1}>
          <Text maxW="38ch" color={palette.muted} lineHeight={1.7}>
            A selection of products I've helped design and ship — from
            business platforms and AI health tools to fintech and exam systems.
          </Text>
        </Reveal>
      </Flex>

      <Reveal mb={{ base: 5, md: 6 }}>
        <Card index={0} featured {...featured} />
      </Reveal>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 6 }}>
        {rest.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 0.08} h="100%">
            <Card index={i + 1} {...project} />
          </Reveal>
        ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default ProjectsSection;
