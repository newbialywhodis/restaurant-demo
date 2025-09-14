import type { Dish } from "@/types/dish";

export const DISH_VARIANTS = {
  sizes: [
    {
      id: "standard",
      name: "Standard",
      priceModifier: 0,
      category: "size" as const,
    },
    { id: "duzy", name: "Duży", priceModifier: 5, category: "size" as const },
    { id: "mega", name: "Mega", priceModifier: 10, category: "size" as const },
  ],
  sauces: [
    {
      id: "czosnek",
      name: "Sos czosnkowy",
      priceModifier: 0,
      category: "sauce" as const,
    },
    {
      id: "ostry",
      name: "Sos ostry",
      priceModifier: 0,
      category: "sauce" as const,
    },
    {
      id: "mieszany",
      name: "Sos mieszany",
      priceModifier: 0,
      category: "sauce" as const,
    },
  ],
  extras: [
    {
      id: "ser",
      name: "Dodatkowy ser",
      priceModifier: 3,
      category: "extra" as const,
    },
    {
      id: "mieso",
      name: "Dodatkowe mięso",
      priceModifier: 8,
      category: "extra" as const,
    },
  ],
} as const;

export const MENU_ITEMS: Dish[] = [
  {
    title: "Rollo",
    popular: true,
    price: 24,
    category: "Dania główne",
    image: "/menu/rollo.webp",
    description:
      "Soczysty kebab z najlepszego mięsa, świeżymi warzywami i domowym sosem.",
  },
  {
    title: "Rollo z frytkami",
    popular: true,
    price: 27,
    category: "Dania główne",
    image: "/menu/rollo_fries.webp",
    description:
      "Soczysty kebab z najlepszego mięsa, świeżymi warzywami i domowym sosem oraz z frytkami.",
  },
  {
    title: "Kebab w bułce",
    popular: true,
    price: 26,
    category: "Dania główne",
    image: "/menu/rollo_bulka.webp",
    description: "Tradycyjny kebab podawany w bułce z dodatkami.",
  },
  {
    title: "Kebab na talerzu",
    popular: false,
    price: 30,
    category: "Dania główne",
    image: "/menu/plate.webp",
    description: "Kebab podawany na talerzu z ryżem i sałatką.",
  },
  {
    title: "Kebab box",
    popular: false,
    price: 18,
    category: "Dania główne",
    image: "/menu/box.webp",
    description: "Tradycyjny box z frytkami, sałatką, sosem i mięsem.",
  },
  {
    title: "Ayran",
    popular: true,
    price: 8,
    category: "Napoje",
    image: "/menu/ayran.webp",
    description: "Tradycyjny turecki napój jogurtowy.",
  },
  {
    title: "Coca-Cola",
    popular: false,
    price: 6,
    category: "Napoje",
    image: "/menu/cola.webp",
    description: "Klasyczna Coca-Cola.",
  },
  {
    title: "Woda mineralna",
    popular: false,
    price: 4,
    category: "Napoje",
    image: "/menu/water.webp",
    description: "Świeża woda mineralna.",
  },
  {
    title: "Frytki",
    popular: false,
    price: 12,
    category: "Dodatki",
    image: "/menu/fries.webp",
    description: "Chrupiące frytki z ziemniaków.",
  },
];

export const getMenuByCategory = (category: string): Dish[] => {
  if (category === "Wszystkie") return MENU_ITEMS;
  return MENU_ITEMS.filter((dish) => dish.category === category);
};

export const getPopularDishes = (): Dish[] => {
  return MENU_ITEMS.filter((dish) => dish.popular);
};

export const getAllCategories = (): string[] => {
  const categories = Array.from(
    new Set(MENU_ITEMS.map((dish) => dish.category))
  );
  return ["Wszystkie", ...categories];
};

export const getDishById = (title: string): Dish | undefined => {
  return MENU_ITEMS.find((dish) => dish.title === title);
};
