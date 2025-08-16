// src/components/notifications/ToastNotification.tsx
import { Toast, useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const AnimatedToast = ({ title, status }) => {
  const toast = useToast();

  useEffect(() => {
    toast({
      position: "top-right",
      render: () => (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          <Toast
            title={title}
            status={status}
            variant="solid"
            colorScheme={status === 'success' ? 'green' : 'red'}
          />
        </motion.div>
      ),
    });
  }, []);

  return null;
};

export default AnimatedToast;
