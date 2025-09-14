"use client";

import { SimpleGrid, Title, Stack, Button, Group } from "@mantine/core";
import type { Dish } from "@/types/dish";
import Link from "next/link";
import { DishCard } from "@/components/DishCard/DishCard";

interface PopularDishesProps {
  popularDishes: Dish[];
}

export default function PopularDishes({ popularDishes }: PopularDishesProps) {
  return (
    <Stack gap="md">
      <Title order={2}>Popularne dania</Title>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md">
        {popularDishes.map((dish) => (
          <DishCard dish={dish} key={dish.title} />
        ))}
      </SimpleGrid>

      <Group justify="center" mt="md">
        <Button component={Link} href="/menu" size="lg">
          Zobacz pełne menu
        </Button>
      </Group>
    </Stack>
  );
}
