"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Menu, X, Home, Contact, Code, Server, User, Mail } from "lucide-react";
import { Link } from "@heroui/link";
import { Button, Image } from "@heroui/react";
import { useRouter, usePathname } from "next/navigation";

import { LanguageSwitcher } from "./LanguageSwitcher";

import { Dictionary } from "@/types/dictionary";
import { useLoading } from "@/contexts/LoadingContext";

interface NavbarProps {
  dictionary: Dictionary["common"] | Dictionary;
}

const Navbar = ({ dictionary }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { language } = useLoading();
  const [currentLang, setCurrentLang] = useState<string>("");

  // Risolve la struttura del dizionario
  const navDictionary = useMemo(() => {
    // Fallback
    return {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      getInTouch: "Get in Touch",
    };
  }, [dictionary]);

  // Log per il debug
  useEffect(() => {
    console.log("Navbar dictionary:", dictionary);
    console.log("Navbar navDictionary:", navDictionary);
  }, [dictionary, navDictionary]);

  // Aggiornato per impostare la lingua in modo più affidabile
  useEffect(() => {
    const pathLang = pathname.split("/")[1];

    if (pathLang && (pathLang === "en" || pathLang === "it")) {
      // Aggiornare currentLang solo se è diverso per evitare re-render inutili
      if (currentLang !== pathLang) {
        setCurrentLang(pathLang);
        console.log("Lingua impostata da pathname:", pathLang);
      }
    } else if (language && currentLang !== language) {
      // Usa la lingua dal context come fallback solo se necessario
      setCurrentLang(language);
      console.log("Lingua impostata da context:", language);
    } else if (!currentLang) {
      // Se non c'è né pathLang né language, usa "en" come fallback
      setCurrentLang("en");
      console.log("Lingua impostata di default: en");
    }
  }, [pathname, language, currentLang]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Crea i percorsi con il prefisso della lingua usando useMemo per performance
  const navLinks = useMemo(() => {
    // Non creare navLinks finché non abbiamo una lingua valida
    if (!currentLang) return [];

    return [
      {
        name: navDictionary.home || "Home",
        path: `/${currentLang}`,
        icon: <Home size={16} />,
      },
      {
        name: navDictionary.services || "Services",
        path: `/${currentLang}/services`,
        icon: <Server size={16} />,
      },
      {
        name: navDictionary.projects || "Projects",
        path: `/${currentLang}/projects`,
        icon: <Code size={16} />,
      },
      {
        name: navDictionary.about || "About",
        path: `/${currentLang}/about`,
        icon: <User size={16} />,
      },
      {
        name: navDictionary.contact || "Contact",
        path: `/${currentLang}/contact`,
        icon: <Contact size={16} />,
      },
    ];
  }, [navDictionary, currentLang]); // Ricalcola quando cambia il dizionario o la lingua

  // Recupera il testo per "Get in Touch" dal dizionario

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-xl px-4 py-2">
          <div className="flex items-center justify-between">
            <Link
              className="flex items-center space-x-2"
              href={`/${currentLang}`}
            >
              <Image alt="logo" height={64} src="/logo_full.svg" width={200} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  className={`flex items-center gap-2 min-h-[40px] ${
                    pathname === link.path ? "text-primary-400" : ""
                  }`}
                  color="foreground"
                  href={link.path}
                  underline={link.path === pathname ? "always" : "hover"}
                >
                  <span className="flex items-center justify-center w-5 h-5">
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                </Link>
              ))}
              <Button
                color="primary"
                startContent={<Mail size={16} />}
                variant="solid"
              >
                {navDictionary.getInTouch || "Get in Touch"}
              </Button>
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden rounded-lg p-2 glass-card hover:bg-white/10 transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-2">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Button
                    key={link.name}
                    className={`flex items-center justify-start gap-2 min-h-[40px] ${
                      pathname === link.path ? "text-primary-400" : ""
                    }`}
                    color="default"
                    variant="light"
                    onPress={() => {
                      router.push(link.path);
                      setIsMenuOpen(false);
                    }}
                  >
                    <span className="flex items-center justify-center w-5 h-5">
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                  </Button>
                ))}
                <Button
                  color="primary"
                  startContent={<Mail size={16} />}
                  variant="shadow"
                >
                  {navDictionary.getInTouch || "Get in Touch"}
                </Button>
                {/* TODO: Da migliorare con un layout più efficiente */}
                <div className="flex justify-center py-2">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
