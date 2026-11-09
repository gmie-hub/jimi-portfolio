import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, HStack, Link, Text } from "@chakra-ui/react";
import { socials } from "../data";
import { palette } from "../theme";

const internalLinks = [
  { label: "Work", href: "#projects-section" },
  { label: "Contact", href: "#contactme-section" },
];

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY.current || y < 80);
      setScrolled(y > 24);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      as="header"
      position="fixed"
      top={{ base: 3, md: 5 }}
      left={0}
      right={0}
      zIndex={1000}
      px={{ base: 3, sm: 6 }}
      transform={visible ? "translateY(0)" : "translateY(-140%)"}
      transition="transform .4s cubic-bezier(.22,1,.36,1)"
    >
      <HStack
        maxW="1100px"
        mx="auto"
        justify="space-between"
        pl={{ base: 4, md: 6 }}
        pr={{ base: 2, md: 2 }}
        py={2}
        borderRadius="full"
        border="1px solid"
        borderColor={scrolled ? palette.lineHi : "transparent"}
        bg={scrolled ? "rgba(18,18,22,0.72)" : "transparent"}
        backdropFilter={scrolled ? "blur(14px) saturate(140%)" : "none"}
        transition="all .3s ease"
      >
        <Link
          href="#top"
          _hover={{ textDecoration: "none" }}
          fontWeight={700}
          fontSize="lg"
          letterSpacing="-0.02em"
        >
          Jimi<Text as="span" color={palette.accent}>.</Text>
        </Link>

        <HStack spacing={{ base: 1, md: 2 }}>
          <HStack spacing={1} display={{ base: "none", sm: "flex" }} mr={2}>
            {socials.map((s) => (
              <Link
                key={s.url}
                href={s.url}
                isExternal={!s.url.startsWith("mailto")}
                aria-label={s.label}
                color={palette.muted}
                w={9}
                h={9}
                display="grid"
                placeItems="center"
                borderRadius="full"
                _hover={{ color: palette.text, bg: "whiteAlpha.100" }}
              >
                <FontAwesomeIcon icon={s.icon} />
              </Link>
            ))}
          </HStack>

          {internalLinks.map((l, i) => {
            const primary = i === internalLinks.length - 1;
            return (
              <Link
                key={l.href}
                href={l.href}
                fontSize="sm"
                fontWeight={600}
                px={4}
                py={2}
                borderRadius="full"
                color={primary ? palette.accentInk : palette.text}
                bg={primary ? palette.accent : "transparent"}
                _hover={{
                  textDecoration: "none",
                  bg: primary ? "#D6FA6A" : "whiteAlpha.100",
                }}
                transition="background .2s ease"
              >
                {l.label}
              </Link>
            );
          })}
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
