"use client";
import React, { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import { getDictionary } from "../dictionaries";

const Page = () => {
  const params = useParams();
  const [dictionary, setDictionary] = useState<any>(null);

  useEffect(() => {
    const loadDictionary = async () => {
      try {
        // Estrai la lingua dai parametri dell'URL
        const lang = params?.lang as string;
        if (lang && (lang === "en" || lang === "it")) {
          const dict = await getDictionary(lang);
          setDictionary(dict);
          console.log("Dictionary loaded for contact page:", lang);
        }
      } catch (error) {
        console.error("Error loading dictionary:", error);
        // Fallback a un dizionario vuoto in caso di errore
        setDictionary({});
      }
    };

    loadDictionary();
  }, [params]);

  return (
    <div className="min-h-screen">
      <Navbar dictionary={dictionary} />
      <main className="pt-32 pb-20">
        <ContactForm />
      </main>
    </div>
  );
};

export default Page;
