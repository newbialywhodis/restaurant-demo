"use client";

import {
  SimpleGrid,
  Title,
  Text,
  Button,
  Group,
  Image,
  Box,
  Stack,
  Rating,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import classes from "./Hero.module.css";
import { IconPizza, IconCar } from "@tabler/icons-react";
import Features from "./Features/Features";

export default function Hero() {
  const router = useRouter();

  const handleMenuClick = () => {
    router.push("/menu");
  };

  const handleScrollToOrder = () => {
    const orderSection = document.getElementById("how-to-order");
    if (orderSection) {
      orderSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const buttonHoverVariants: Variants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const ratingVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  return (
    <Box>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SimpleGrid
          className={classes.hero}
          cols={{ base: 1, md: 2 }}
          spacing="xl"
          verticalSpacing="xl"
        >
          <Box>
            <motion.div variants={itemVariants}>
              <Title order={1} size="3rem" fw={700} mb="md">
                Kebab{" "}
                <Text span c="warmOrange.7" inherit>
                  ultra
                </Text>
                , bo ultrapyszny
              </Title>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Text size="lg" c="dimmed" mb="xl" lh={1.5}>
                Spróbuj kebaba, który przeniesie Twoje kubki smakowe na zupełnie
                nowy poziom. Świeże warzywa, soczyste mięso i autorskie sosy
                tworzą kompozycję, której nie da się zapomnieć. Idealny na
                szybki lunch, wieczorną ucztę albo spotkanie ze znajomymi -
                zawsze chrupiący, zawsze pełen smaku.
              </Text>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Group gap="sm" mb="sm" visibleFrom="sm">
                <motion.div
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    size="lg"
                    variant="filled"
                    leftSection={<IconPizza />}
                    onClick={handleMenuClick}
                  >
                    Sprawdź menu
                  </Button>
                </motion.div>

                <motion.div
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    leftSection={<IconCar />}
                    onClick={handleScrollToOrder}
                  >
                    Jak zamówić
                  </Button>
                </motion.div>
              </Group>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Stack gap="md" mb={"md"} hiddenFrom="sm">
                <motion.div
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button fullWidth size="lg" onClick={handleMenuClick}>
                    Sprawdź menu
                  </Button>
                </motion.div>
                <motion.div
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    fullWidth
                    variant="outline"
                    size="lg"
                    onClick={handleScrollToOrder}
                  >
                    Jak zamówić
                  </Button>
                </motion.div>
              </Stack>
            </motion.div>

            <motion.div variants={ratingVariants}>
              <Group gap="xs" align="center">
                <Rating value={4.6} readOnly />
                <Text size="sm" c="dimmed">
                  4.6 / 5 (140 opinii Google)
                </Text>
              </Group>
            </motion.div>
          </Box>

          <motion.div variants={imageVariants}>
            <Box>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/rollor_hero.png" alt="Kebab Ultra" />
              </motion.div>
            </Box>
          </motion.div>
        </SimpleGrid>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <Features />
      </motion.div>
    </Box>
  );
}
