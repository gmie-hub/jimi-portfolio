import { Box } from "@chakra-ui/react";

/** Full-width section with a centred, padded content column. */
const FullScreenSection = ({ children, id, bg, innerProps, ...rest }) => (
  <Box as="section" id={id} position="relative" w="100%" bg={bg} {...rest}>
    <Box
      position="relative"
      maxW="1200px"
      mx="auto"
      px={{ base: 4, sm: 6, md: 10 }}
      {...innerProps}
    >
      {children}
    </Box>
  </Box>
);

export default FullScreenSection;
