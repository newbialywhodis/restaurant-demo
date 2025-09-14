"use client";

import { memo } from "react";
import { Card, Text, Stack, Image, Group } from "@mantine/core";
import { motion, Variants } from "framer-motion";
import type { Dish } from "@/types/dish";
import classes from "./DishCard.module.css";

interface DishCardProps {
  dish: Dish;
}

function DishCardComponent({ dish }: DishCardProps) {
  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        key={dish.title}
        shadow="sm"
        padding="lg"
        withBorder
        className={classes.card}
      >
        <Card.Section>
          <Image src={dish.image} alt={dish.title} />
        </Card.Section>

        <Stack gap="xs" mt="md" style={{ flexGrow: 1 }}>
          <Text fw={500} size="lg" ta="center">
            {dish.title}
          </Text>
          <Text size="sm" c="dimmed" ta="center">
            {dish.description}
          </Text>
        </Stack>

        <Group justify="center" align="center" mt="md">
          <Text fw={700} size="lg">
            {dish.price} zł
          </Text>
        </Group>
      </Card>
    </motion.div>
  );
}

export const DishCard = memo(DishCardComponent);
