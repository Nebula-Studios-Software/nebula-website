"use client";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useLoading } from "@/contexts/LoadingContext";
import Image from "next/image";

const languages = [
  { code: "it", name: "Italiano", flag: "/it/flag/it.svg" },
  { code: "en", name: "English", flag: "/en/flag/us.svg" },
];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { setLoading, setLanguage } = useLoading();
  const containerRef = useRef<HTMLDivElement>(null);

  // Aggiunta della variabile di stato per gestire il montaggio del componente
  const [isMounted, setIsMounted] = useState(false);

  // Variabili di stato per currentLang e currentLanguage
  const [currentLang, setCurrentLang] = useState<string>("");
  const [currentLanguage, setCurrentLanguage] = useState<
    (typeof languages)[0] | undefined
  >(undefined);

  // Aggiorno lo stato solo lato client
  useEffect(() => {
    setIsMounted(true);
    const lang = pathname.split("/")[1];
    setCurrentLang(lang);
    setCurrentLanguage(languages.find((l) => l.code === lang));
  }, [pathname]);

  const switchLanguage = async (lang: string) => {
    setLoading(true);
    setLanguage(lang);
    const newPath = pathname.replace(`/${currentLang}`, `/${lang}`);
    await router.push(newPath);
    setIsOpen(false);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Non renderizzare nulla durante il caricamento lato server
  if (!isMounted) {
    return <div className="w-[48px] h-[32px]"></div>;
  }

  return (
    <div ref={containerRef} className="relative">
      <motion.div
        className="relative"
        animate={{
          scale: isOpen ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <Button
          variant="light"
          color="default"
          size="sm"
          className="glass-card min-w-[48px] justify-center relative overflow-hidden p-2"
          onPress={() => setIsOpen(!isOpen)}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20"
            animate={{
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <div className="flex items-center gap-2 relative z-10">
            <Image
              src={currentLanguage?.flag || ""}
              alt={currentLanguage?.name || ""}
              width={24}
              height={24}
              className="rounded-sm"
            />
            <ChevronDown
              className={`h-3 w-3 transition-transform duration-200 relative z-10 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
            className="absolute right-0 mt-2 w-[120px]"
          >
            <div className="glass-panel rounded-xl p-2 space-y-1 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent"
                animate={{
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.code}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  animate={{
                    scale: hoveredIndex === index ? 1.05 : 1,
                    x: hoveredIndex === index ? 5 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="light"
                    color={currentLang === lang.code ? "primary" : "default"}
                    size="sm"
                    onPress={() => switchLanguage(lang.code)}
                    className="w-full justify-start gap-2 relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent"
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <Image
                      src={lang.flag}
                      alt={lang.name}
                      width={20}
                      height={20}
                      className="rounded-sm relative z-10"
                    />
                    <span className="text-sm font-medium relative z-10">
                      {lang.name}
                    </span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
