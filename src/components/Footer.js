import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { palette } from "../theme";

const Footer = () => (
  <Box as="footer" borderTop="1px solid" borderColor={palette.line}>
    <Flex
      maxW="1200px"
      mx="auto"
      px={{ base: 4, sm: 6, md: 10 }}
      py={8}
      gap={4}
      direction={{ base: "column", sm: "row" }}
      justify="space-between"
      align="center"
      fontSize="sm"
      color={palette.muted}
    >
      <Text>
        © {new Date().getFullYear()} Jimi<Text as="span" color={palette.accent}>.</Text> Designed &amp; built with care.
      </Text>
      <Link href="#top" _hover={{ color: palette.text }}>
        Back to top ↑
      </Link>
    </Flex>
  </Box>
);

export default Footer;
