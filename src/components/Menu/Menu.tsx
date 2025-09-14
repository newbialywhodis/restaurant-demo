"use client";

import { Tabs, SimpleGrid } from "@mantine/core";
import { Dish } from "@/types/dish";
import { DishCard } from "@/components/DishCard/DishCard";
import { getAllCategories } from "@/config/menu";

interface MenuProps {
  menu: Dish[];
}

export function Menu({ menu }: MenuProps) {
  const categories = getAllCategories();

  return (
    <Tabs variant="pills" mt={"md"} defaultValue="Wszystkie">
      <Tabs.List justify="center">
        {categories.map((category) => (
          <Tabs.Tab value={category} key={category}>
            {category}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {categories.map((category) => (
        <Tabs.Panel value={category} key={category} pt="md">
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md">
            {menu
              .filter(
                (dish) => category === "Wszystkie" || dish.category === category
              )
              .map((dish) => (
                <DishCard dish={dish} key={dish.title} />
              ))}
          </SimpleGrid>
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}
