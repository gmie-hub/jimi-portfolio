import { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import Reveal from "./Reveal";
import { SectionLabel } from "./ProjectsSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import { EMAIL, socials } from "../data";
import { palette } from "../theme";

const fieldStyles = {
  bg: "rgba(255,255,255,0.03)",
  border: "1px solid",
  borderColor: palette.line,
  borderRadius: "12px",
  h: 12,
  _hover: { borderColor: palette.lineHi },
  _focusVisible: {
    borderColor: palette.accent,
    boxShadow: `0 0 0 1px ${palette.accent}`,
  },
  _placeholder: { color: palette.faint },
};

const labelStyles = { fontSize: "sm", color: palette.muted, fontWeight: 500 };

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: { firstName: "", email: "", type: "hireMe", comment: "" },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Your name is required"),
      email: Yup.string().email("Enter a valid email").required("Email is required"),
      type: Yup.string().required("Choose a type of enquiry"),
      comment: Yup.string()
        .min(10, "Tell me a little more (10+ characters)")
        .required("A message is required"),
    }),
    onSubmit: (values) => submit(values),
  });

  useEffect(() => {
    if (!response) return;
    onOpen(response.type, response.message);
    if (response.type === "success") formik.resetForm();
  }, [response]);

  return (
    <FullScreenSection
      id="contactme-section"
      sx={{ scrollMarginTop: "40px" }}
      innerProps={{ py: { base: 20, md: 32 } }}
    >
      <Box
        position="relative"
        overflow="hidden"
        bg={palette.surface}
        border="1px solid"
        borderColor={palette.line}
        borderRadius={{ base: "24px", md: "32px" }}
        p={{ base: 6, sm: 8, md: 14 }}
      >
        <Box
          position="absolute"
          top="-30%"
          left="-10%"
          w="70%"
          h="90%"
          pointerEvents="none"
          bgImage="radial-gradient(closest-side, rgba(198,244,50,0.10), transparent)"
        />

        <SimpleGrid position="relative" columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }}>
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight={600}
              letterSpacing="-0.04em"
              lineHeight={1}
              mb={6}
            >
              Let's build something{" "}
              <Text as="span" className="serif" color={palette.accent} fontSize="1.08em">
                great
              </Text>{" "}
              together.
            </Heading>
            <Text color={palette.muted} lineHeight={1.7} maxW="40ch" mb={10}>
              Have a product idea, a frontend that needs polish, or a role you
              think I'd be a fit for? Send a message — I usually reply within a
              day or two.
            </Text>

            <Link
              href={`mailto:${EMAIL}`}
              display="inline-flex"
              alignItems="center"
              gap={3}
              fontSize={{ base: "lg", md: "2xl" }}
              fontWeight={600}
              letterSpacing="-0.02em"
              borderBottom="1px solid"
              borderColor={palette.lineHi}
              pb={1}
              wordBreak="break-all"
              _hover={{ textDecoration: "none", color: palette.accent, borderColor: palette.accent }}
            >
              {EMAIL} <FontAwesomeIcon icon={faArrowRight} size="sm" />
            </Link>

            <HStack spacing={3} mt={8}>
              {socials.map((s) => (
                <Link
                  key={s.url}
                  href={s.url}
                  isExternal={!s.url.startsWith("mailto")}
                  aria-label={s.label}
                  w={11}
                  h={11}
                  display="grid"
                  placeItems="center"
                  borderRadius="full"
                  border="1px solid"
                  borderColor={palette.lineHi}
                  color={palette.muted}
                  _hover={{ color: palette.accentInk, bg: palette.accent, borderColor: palette.accent }}
                  transition="all .25s ease"
                >
                  <FontAwesomeIcon icon={s.icon} />
                </Link>
              ))}
            </HStack>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={formik.handleSubmit} noValidate>
              <Stack spacing={5}>
                <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={5}>
                  <FormControl isInvalid={formik.touched.firstName && !!formik.errors.firstName}>
                    <FormLabel htmlFor="firstName" {...labelStyles}>Name</FormLabel>
                    <Input id="firstName" placeholder="Ada Lovelace" {...fieldStyles} {...formik.getFieldProps("firstName")} />
                    <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
                    <FormLabel htmlFor="email" {...labelStyles}>Email</FormLabel>
                    <Input id="email" type="email" placeholder="you@company.com" {...fieldStyles} {...formik.getFieldProps("email")} />
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  </FormControl>
                </SimpleGrid>

                <FormControl isInvalid={formik.touched.type && !!formik.errors.type}>
                  <FormLabel htmlFor="type" {...labelStyles}>What's it about?</FormLabel>
                  <Select id="type" {...fieldStyles} {...formik.getFieldProps("type")}>
                    <option value="hireMe">Freelance project proposal</option>
                    <option value="fullTime">Full-time role</option>
                    <option value="other">Something else</option>
                  </Select>
                  <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.comment && !!formik.errors.comment}>
                  <FormLabel htmlFor="comment" {...labelStyles}>Message</FormLabel>
                  <Textarea
                    id="comment"
                    placeholder="Tell me about your project, timeline and goals…"
                    {...fieldStyles}
                    h="180px"
                    py={3}
                    resize="vertical"
                    {...formik.getFieldProps("comment")}
                  />
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                </FormControl>

                <Button
                  type="submit"
                  isLoading={isLoading}
                  h={14}
                  borderRadius="full"
                  bg={palette.accent}
                  color={palette.accentInk}
                  fontWeight={600}
                  rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                  _hover={{ bg: "#D6FA6A" }}
                  _active={{ bg: "#B2DE1F" }}
                >
                  Send message
                </Button>
              </Stack>
            </form>
          </Reveal>
        </SimpleGrid>
      </Box>
    </FullScreenSection>
  );
};

export default ContactMeSection;
