import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

/** Fades and lifts its children into view once, when scrolled into the viewport. */
const Reveal = ({ children, delay = 0, y = 24, ...rest }) => (
  <MotionBox
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    {...rest}
  >
    {children}
  </MotionBox>
);

export default Reveal;
