import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: folagmie16@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/gmie-hub",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/gmie-hub",
  },
  // {
  //   icon: faMedium,
  //   url: "https://medium.com",
  // },
  // {
  //   icon: faStackOverflow,
  //   url: "https://stackoverflow.com",
  // },
];

const internalLinks = [
  { id: 'projects', link: 'Projects', url: '#projects' },
  { id: 'contactme', link: 'Contact Me', url: '#contact-me' },
];

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastSCrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastSCrollY.current || currentScrollY < 50) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      lastSCrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={showHeader ? "translateY(0)" : "translateY(-200px)"}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex="1000"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing='8'>
              {socials.map((item) => (
                <a key={item.url} href={item.url}>
                  <FontAwesomeIcon icon={item.icon} size='2x' />
                </a>
              ))}
            </HStack>
          </nav>
          
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              {internalLinks.map((item) => (
                <a key={item.id} onClick={handleClick(item.id)} href={item.url}>{item.link}</a>
              ))}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
