"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from "react";
import { usePathname, useRouter } from "next/navigation";

interface LoadingContextType {
  isLoading: boolean;
  language: string;
  setLoading: (loading: boolean) => void;
  setLanguage: (language: string) => void;
  reloadDictionary: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  // Funzione per forzare il reload della pagina quando necessario
  const reloadDictionary = useCallback(() => {
    router.refresh();
    console.log("Refreshing dictionary");
  }, [router]);

  // Inizializza la lingua basata sul pathname
  useEffect(() => {
    // Durante il rendering lato server, pathname può essere undefined
    if (!pathname) return;

    // Estrai la lingua dal pathname (es: /en/about -> en)
    const pathLang = pathname.split("/")[1];

    if (pathLang && (pathLang === "en" || pathLang === "it")) {
      // Se la lingua nel pathname è diversa da quella nello stato
      if (language && pathLang !== language) {
        console.log(`Language mismatch: path=${pathLang}, state=${language}`);
        setLanguage(pathLang);
        localStorage.setItem("language", pathLang);
      }
      // Se la lingua non è ancora impostata, imposta quella del pathname
      else if (!language) {
        setLanguage(pathLang);
        localStorage.setItem("language", pathLang);
      }
    } else {
      // Recupera la lingua dal localStorage o usa 'en' come fallback
      const storedLanguage = localStorage.getItem("language") || "en";
      if (!language) {
        setLanguage(storedLanguage);
      }
    }
  }, [pathname, language]);

  // Salva la lingua in localStorage quando cambia
  useEffect(() => {
    if (language) {
      localStorage.setItem("language", language);
      console.log("Language set to:", language);
    }
  }, [language]);

  const contextValue = {
    isLoading,
    setLoading: setIsLoading,
    language,
    setLanguage,
    reloadDictionary,
  };

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}
