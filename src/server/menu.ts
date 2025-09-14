"use server";

import type { Dish } from "@/types/dish";
import {
  MENU_ITEMS,
  getPopularDishes as getPopularFromConfig,
} from "@/config/menu";

export async function getMenu(): Promise<Dish[]> {
  return MENU_ITEMS;
}

export async function getPopularDishes(): Promise<Dish[]> {
  return getPopularFromConfig();
}

export async function getMenuByCategory(category: string): Promise<Dish[]> {
  if (category === "Wszystkie") return MENU_ITEMS;
  return MENU_ITEMS.filter((dish) => dish.category === category);
}

export async function getDishByTitle(title: string): Promise<Dish | null> {
  const dish = MENU_ITEMS.find((dish) => dish.title === title);
  return dish || null;
}
