import { useState } from "react";
import { EMAIL } from "../data";

const enquiryLabels = {
  hireMe: "Freelance project proposal",
  fullTime: "Full-time role",
  other: "General enquiry",
};

/**
 * Submits the contact form by opening the visitor's email client with a
 * pre-filled message addressed to Jimi.
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setLoading(true);
    try {
      const subject = `${enquiryLabels[data.type] || "Enquiry"} — ${data.firstName}`;
      const body = `${data.comment}\n\n— ${data.firstName} (${data.email})`;
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setResponse({
        type: "success",
        message: `Thanks ${data.firstName}! Your email app should open with your message ready to send.`,
      });
    } catch (error) {
      setResponse({
        type: "error",
        message: `Something went wrong — please email me directly at ${EMAIL}.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
