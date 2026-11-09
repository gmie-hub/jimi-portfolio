import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";
import { palette } from "../theme";

/** Global alert dialog driven by AlertContext. */
function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success";

  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose} isCentered>
      <AlertDialogOverlay bg="blackAlpha.700" backdropFilter="blur(6px)">
        <AlertDialogContent
          mx={4}
          bg={palette.surfaceHi}
          color={palette.text}
          border="1px solid"
          borderColor={isSuccess ? "rgba(198,244,50,0.4)" : "rgba(255,120,100,0.5)"}
          borderRadius="20px"
        >
          <AlertDialogHeader fontSize="xl" fontWeight={600} color={isSuccess ? palette.accent : "#FF8A65"}>
            {isSuccess ? "All good!" : "Oops!"}
          </AlertDialogHeader>
          <AlertDialogBody color={palette.muted}>{message}</AlertDialogBody>
          <AlertDialogFooter>
            <Button
              ref={cancelRef}
              onClick={onClose}
              borderRadius="full"
              bg="whiteAlpha.100"
              _hover={{ bg: "whiteAlpha.200" }}
            >
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
