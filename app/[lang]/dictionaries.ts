import { Dictionary } from "@/types/dictionary";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  it: () => import("./dictionaries/it.json").then((module) => module.default),
};

export const getDictionary = async (
  locale: "en" | "it"
): Promise<Dictionary> => {
  try {
    const dictionary = await dictionaries[locale]();

    return dictionary;
  } catch {
    if (locale !== "en") {
      const fallbackDict = await dictionaries["en"]();

      return fallbackDict;
    }

    return {} as Dictionary;
  }
};
