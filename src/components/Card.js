import { Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, onClick }) => {
  return (
    <Stack
      bg="white"
      borderRadius="8"
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: "scale(1.05)" }}
      onClick={onClick}
      cursor="pointer"
    >
      <Image
        src={imageSrc}
        alt={imageSrc}
        w="100%"
        h="350px"
        borderRadius="8"
        objectFit="cover"
        objectPosition="center"
      />

      <Stack m="3">
        <Text color="black" fontWeight="bold">
          {title}
        </Text>
        <Text color="gray">{description}</Text>

        <HStack color="black">
          <Text fontSize="sm">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </Stack>
    </Stack>
  );
};

export default Card;
