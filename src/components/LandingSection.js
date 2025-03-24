import React from "react";
import { Avatar, Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Jimi!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={8}>
      <VStack>
        <Avatar src='/my-passport.jpeg' size='2xl' />
        <Text fontFamily="Lato">{greeting}</Text>
      </VStack>

      <VStack>
        <Heading fontFamily="Lato">{bio1}</Heading>
        <Heading fontFamily="Lato">{bio2}</Heading>
      </VStack>
      
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
