"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useMemo } from "react";

import BackgroundStars from "./BackgroundStars";
import Navbar from "./Navbar";
import { LoadingScreen } from "./LoadingScreen";

import { useLoading } from "@/contexts/LoadingContext";
import { Dictionary } from "@/types/dictionary";

interface ClientLayoutProps {
  children: React.ReactNode;
  dictionary: Dictionary;
}

export default function ClientLayout({
  children,
  dictionary,
}: ClientLayoutProps) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { isLoading, language } = useLoading();
  const [currentDictionary, setCurrentDictionary] = useState(dictionary);

  // Verifica e correggi il dizionario se necessario
  const normalizedDictionary = useMemo(() => {
    // Verifica che il dizionario sia completo e valido
    if (!dictionary) {
      return {} as Dictionary;
    }

    // Se dictionary.common esiste, il formato è corretto
    if (dictionary.common) {
      return dictionary;
    }

    if ("nav" in dictionary) {
      return {
        common: dictionary as unknown as Dictionary["common"],
        hero: {} as Dictionary["hero"],
        services: {} as Dictionary["services"],
      };
    }

    // Se non corrisponde a nessuna struttura nota, usiamo un fallback
    return {} as Dictionary;
  }, [dictionary]);

  // Aggiorna il dizionario quando cambia dictionary da props
  useEffect(() => {
    setCurrentDictionary(normalizedDictionary);
  }, [normalizedDictionary]);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <LoadingScreen isLoading={isLoading} language={language} />
      {/* <CustomCursor /> */}
      <BackgroundStars isTransitioning={isTransitioning} />
      <Navbar dictionary={currentDictionary} />
      <main className="min-h-screen">{children}</main>
    </>
  );
}
