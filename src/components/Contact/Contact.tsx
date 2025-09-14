"use client";
import {
  Title,
  Text,
  SimpleGrid,
  Stack,
  Container,
  Center,
  Card,
} from "@mantine/core";
import { motion, Variants } from "framer-motion";
import { HomeContact } from "@/components/HomeContact/HomeContact";
import { OpeningHours } from "@/components/OpeningHours/OpeningHours";
import { useState, useEffect } from "react";

export function Contact() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const content = (
    <Container size="xl" py="xl">
      <Center>
        <Stack align="center" ta="center" maw={600}>
          <Title size="2.5rem" fw={900}>
            Kontakt
          </Title>
          <Text size="lg" c="dimmed">
            Masz pytania? Chcesz złożyć zamówienie? Skontaktuj się z nami w
            najwygodniejszy dla Ciebie sposób.
          </Text>
        </Stack>
      </Center>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" mt="md">
        <Card shadow="sm" p="xl" withBorder style={{ height: "100%" }}>
          <HomeContact withTitle={true} withMainIcon={true} />
        </Card>
        <Card shadow="sm" p="xl" withBorder style={{ height: "100%" }}>
          <OpeningHours withIcon={true} withTitle={true} />
        </Card>
      </SimpleGrid>
    </Container>
  );

  if (!isMounted) {
    return content;
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={titleVariants}>
      {content}
    </motion.div>
  );
}
