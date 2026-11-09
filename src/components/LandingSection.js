import { Box, Flex, Heading, HStack, Image, Link, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FullScreenSection from "./FullScreenSection";
import Reveal from "./Reveal";
import { projects, stack } from "../data";
import { palette } from "../theme";

const stats = [
  { value: `${projects.length}+`, label: "Products shipped" },
  { value: "React", label: "& Next.js specialist" },
  { value: "TS", label: "TypeScript-first" },
];

const LandingSection = () => (
  <FullScreenSection
    id="top"
    overflow="hidden"
    innerProps={{
      minH: "100svh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      pt: { base: 32, md: 40 },
      pb: { base: 16, md: 20 },
    }}
  >
    {/* Background: soft glow + fine grid */}
    <Box
      position="absolute"
      inset={0}
      pointerEvents="none"
      bgImage={`radial-gradient(60% 50% at 75% 20%, rgba(198,244,50,0.13) 0%, transparent 60%),
        radial-gradient(40% 40% at 10% 90%, rgba(120,90,255,0.10) 0%, transparent 70%)`}
    />
    <Box
      position="absolute"
      inset={0}
      pointerEvents="none"
      opacity={0.5}
      bgImage={`linear-gradient(${palette.line} 1px, transparent 1px), linear-gradient(90deg, ${palette.line} 1px, transparent 1px)`}
      bgSize="64px 64px"
      sx={{
        maskImage:
          "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%)",
      }}
    />

    <Box position="relative">
      <Reveal>
        <HStack
          spacing={3}
          display="inline-flex"
          border="1px solid"
          borderColor={palette.lineHi}
          bg="rgba(255,255,255,0.03)"
          borderRadius="full"
          pl={1.5}
          pr={4}
          py={1.5}
          mb={{ base: 8, md: 10 }}
        >
          <Image
            src="/my-passport.jpeg"
            alt="Portrait of Jimi"
            boxSize={8}
            borderRadius="full"
            objectFit="cover"
          />
          <Box
            w={2}
            h={2}
            borderRadius="full"
            bg={palette.accent}
            sx={{ animation: "pulse-dot 2s infinite" }}
          />
          <Text fontSize="sm" color={palette.muted}>
            Hello, I'm <Text as="span" color={palette.text} fontWeight={600}>Jimi</Text> — available for new projects
          </Text>
        </HStack>
      </Reveal>

      <Reveal delay={0.08}>
        <Heading
          as="h1"
          fontWeight={600}
          fontSize={{ base: "2.75rem", sm: "4rem", md: "5.5rem", lg: "6.5rem" }}
          lineHeight={{ base: 1.02, md: 0.98 }}
          letterSpacing="-0.045em"
          maxW="14ch"
        >
          Frontend developer crafting{" "}
          <Text as="span" className="serif" color={palette.accent} fontSize="1.08em">
            considered
          </Text>{" "}
          interfaces.
        </Heading>
      </Reveal>

      <Reveal delay={0.16}>
        <Flex
          mt={{ base: 8, md: 12 }}
          gap={{ base: 8, md: 16 }}
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "flex-end" }}
          justify="space-between"
        >
          <Text
            maxW="46ch"
            fontSize={{ base: "md", md: "lg" }}
            lineHeight={1.7}
            color={palette.muted}
          >
            I specialise in React and Next.js with TypeScript — building fast,
            accessible products for fintech, health, education and business
            teams, from first pixel to production.
          </Text>

          <HStack spacing={3} flexShrink={0}>
            <Link
              href="#projects-section"
              display="inline-flex"
              alignItems="center"
              gap={3}
              px={6}
              py={3.5}
              borderRadius="full"
              bg={palette.accent}
              color={palette.accentInk}
              fontWeight={600}
              _hover={{ textDecoration: "none", bg: "#D6FA6A", gap: 4 }}
              transition="all .25s ease"
            >
              View my work <FontAwesomeIcon icon={faArrowDown} />
            </Link>
            <Link
              href="#contactme-section"
              display="inline-flex"
              alignItems="center"
              gap={3}
              px={6}
              py={3.5}
              borderRadius="full"
              border="1px solid"
              borderColor={palette.lineHi}
              fontWeight={600}
              _hover={{ textDecoration: "none", bg: "whiteAlpha.100", gap: 4 }}
              transition="all .25s ease"
            >
              Say hello <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </HStack>
        </Flex>
      </Reveal>

      <Reveal delay={0.24}>
        <Flex
          mt={{ base: 14, md: 20 }}
          pt={8}
          borderTop="1px solid"
          borderColor={palette.line}
          gap={{ base: 6, md: 16 }}
          wrap="wrap"
        >
          {stats.map((s) => (
            <Box key={s.label} minW="120px">
              <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight={600} letterSpacing="-0.03em">
                {s.value}
              </Text>
              <Text fontSize="sm" color={palette.muted}>
                {s.label}
              </Text>
            </Box>
          ))}
        </Flex>
      </Reveal>
    </Box>

    {/* Stack marquee */}
    <Box
      position="relative"
      mt={{ base: 12, md: 16 }}
      overflow="hidden"
      sx={{
        maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <HStack
        spacing={10}
        w="max-content"
        sx={{ animation: "marquee 28s linear infinite" }}
      >
        {[...stack, ...stack].map((item, i) => (
          <HStack key={i} spacing={10} color={palette.faint}>
            <Text fontSize={{ base: "lg", md: "xl" }} fontWeight={500} whiteSpace="nowrap">
              {item}
            </Text>
            <Text color={palette.accent} opacity={0.6}>✦</Text>
          </HStack>
        ))}
      </HStack>
    </Box>
  </FullScreenSection>
);

export default LandingSection;
