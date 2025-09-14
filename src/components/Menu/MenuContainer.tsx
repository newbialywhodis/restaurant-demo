"use client";

import { Container, Title, Text, Stack } from "@mantine/core";
import { motion, Variants } from "framer-motion";
import { Menu } from "@/components/Menu/Menu";
import { Dish } from "@/types/dish";

interface MenuContainerProps {
  menuItems: Dish[];
}

export function MenuContainer({ menuItems }: MenuContainerProps) {
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Container size="xl" py="xl">
      <motion.div initial="hidden" animate="visible" variants={titleVariants}>
        <Stack align="center" ta="center">
          <Title size="2.5rem" fw={900}>
            Nasze Menu
          </Title>
          <Text size="lg" c="dimmed" maw={600} mx="auto">
            Wszystkie nasze dania przygotowujemy ze świeżych składników według
            tradycyjnych receptur. Smacznego!
          </Text>
        </Stack>
      </motion.div>

      <Menu menu={menuItems} />
    </Container>
  );
}
