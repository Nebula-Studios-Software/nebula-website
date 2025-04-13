"use client";
import { Progress } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket } from "lucide-react";

interface LoadingScreenProps {
  isLoading: boolean;
  language: string;
}

const quotes = {
  it: "Atterrando in Italia",
  en: "Landing in the United States",
};

export function LoadingScreen({ isLoading, language }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/95 backdrop-blur-sm"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center gap-4"
            exit={{ scale: 0.8, opacity: 0 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              bounce: 0.4,
            }}
          >
            <Rocket className="h-12 w-12 text-primary-500" />
            <motion.div
              animate={{ opacity: 1 }}
              className="text-sm font-medium text-foreground/60"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              {quotes[language as keyof typeof quotes]}
            </motion.div>

            <Progress
              isIndeterminate
              aria-label="Loading..."
              className="max-w-md"
              size="sm"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
