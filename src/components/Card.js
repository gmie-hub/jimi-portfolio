import { AspectRatio, Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLock } from "@fortawesome/free-solid-svg-icons";
import { palette } from "../theme";

const domainOf = (url) => (url ? new URL(url).hostname.replace(/^www\./, "") : "private build");

/** Screenshot presented inside a minimal browser frame. */
const BrowserFrame = ({ src, alt, url, ratio }) => (
  <Box
    className="frame"
    bg={palette.surfaceHi}
    border="1px solid"
    borderColor={palette.line}
    borderRadius="16px"
    overflow="hidden"
    transition="border-color .3s ease"
  >
    <HStack px={4} py={2.5} spacing={3} borderBottom="1px solid" borderColor={palette.line}>
      <HStack spacing={1.5}>
        {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
          <Box key={c} w="9px" h="9px" borderRadius="full" bg={c} opacity={0.85} />
        ))}
      </HStack>
      <Text
        flex={1}
        textAlign="center"
        fontSize="xs"
        color={palette.faint}
        bg="rgba(255,255,255,0.04)"
        borderRadius="md"
        py={0.5}
        mx={{ base: 2, md: 8 }}
        noOfLines={1}
      >
        {domainOf(url)}
      </Text>
      <Box w="39px" />
    </HStack>
    <AspectRatio ratio={ratio} bg="#fff">
      <Image
        className="shot"
        src={src}
        alt={alt}
        loading="lazy"
        objectFit="cover"
        objectPosition="top center"
        transition="transform 1s cubic-bezier(.22,1,.36,1)"
      />
    </AspectRatio>
  </Box>
);

const Card = ({ index, title, category, description, image, url, featured }) => {
  const isLink = Boolean(url);

  return (
    <Box
      as={isLink ? "a" : "div"}
      href={url}
      target={isLink ? "_blank" : undefined}
      rel={isLink ? "noopener noreferrer" : undefined}
      display="block"
      role="group"
      p={{ base: 3, md: 4 }}
      bg={palette.surface}
      border="1px solid"
      borderColor={palette.line}
      borderRadius="24px"
      transition="transform .5s cubic-bezier(.22,1,.36,1), border-color .3s ease, box-shadow .5s ease"
      _hover={
        isLink
          ? {
              transform: "translateY(-6px)",
              borderColor: palette.lineHi,
              boxShadow: "0 30px 60px -30px rgba(0,0,0,0.8), 0 0 0 1px rgba(198,244,50,0.08)",
              ".shot": { transform: "scale(1.04)" },
              ".arrow": { bg: palette.accent, color: palette.accentInk, transform: "rotate(0deg)" },
            }
          : undefined
      }
      h="100%"
    >
      <Flex direction={featured ? { base: "column", lg: "row" } : "column"} gap={featured ? { base: 0, lg: 8 } : 0} h="100%">
        <Box flex={featured ? { lg: "1.5" } : undefined}>
          <BrowserFrame src={image} alt={`${title} screenshot`} url={url} ratio={16 / 10} />
        </Box>

        <Flex
          direction="column"
          flex={featured ? { lg: "1" } : 1}
          px={{ base: 2, md: 3 }}
          pt={{ base: 5, md: 6 }}
          pb={{ base: 2, md: 3 }}
          justify={featured ? { lg: "center" } : undefined}
        >
          <HStack justify="space-between" mb={3}>
            <HStack spacing={3} fontSize="xs" letterSpacing="0.08em" textTransform="uppercase">
              <Text color={palette.accent} fontWeight={600}>
                {String(index + 1).padStart(2, "0")}
              </Text>
              <Text color={palette.muted}>{category}</Text>
            </HStack>
            <Box
              className="arrow"
              w={9}
              h={9}
              flexShrink={0}
              display="grid"
              placeItems="center"
              borderRadius="full"
              border="1px solid"
              borderColor={palette.lineHi}
              color={palette.muted}
              fontSize="xs"
              transform={isLink ? "rotate(-45deg)" : undefined}
              transition="all .35s ease"
              title={isLink ? "Visit site" : "Private / internal build"}
            >
              <FontAwesomeIcon icon={isLink ? faArrowRight : faLock} />
            </Box>
          </HStack>

          <Heading
            as="h3"
            fontSize={featured ? { base: "2xl", md: "4xl" } : { base: "xl", md: "2xl" }}
            fontWeight={600}
            letterSpacing="-0.03em"
            mb={3}
          >
            {title}
          </Heading>
          <Text color={palette.muted} lineHeight={1.7} fontSize={{ base: "sm", md: "md" }}>
            {description}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
