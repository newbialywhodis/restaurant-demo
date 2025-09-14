"use client";

import {
  Button,
  Card,
  Container,
  SimpleGrid,
  Text,
  Title,
  Stack,
  Group,
  Image,
  ThemeIcon,
} from "@mantine/core";
import { IconPhone, IconShoppingCart } from "@tabler/icons-react";
import { motion, Variants } from "framer-motion";
import { siteConfig } from "@/config/site";

interface OrderMethod {
  icon: typeof IconPhone;
  title: string;
  description: string;
  action: "phone" | "partners";
}

const orderMethods: OrderMethod[] = [
  {
    icon: IconPhone,
    title: "Telefonicznie",
    description: "Zadzwoń do nas i odbierz na miejscu lub zapytaj o dowóz.",
    action: "phone",
  },
  {
    icon: IconShoppingCart,
    title: "Online",
    description: "Zamów wygodnie online przez jednego z naszych partnerów.",
    action: "partners",
  },
];

const OrderCard = ({ method }: { method: OrderMethod }) => {
  const Icon = method.icon;

  return (
    <Card shadow="sm" p="xl" style={{ height: "100%" }}>
      <Stack gap="md">
        <Group gap="md" wrap="nowrap">
          <ThemeIcon size="4rem" variant="outline">
            <Icon style={{ width: "70%", height: "70%" }} />
          </ThemeIcon>

          <Stack gap={0}>
            <Title order={3}>{method.title}</Title>
            <Text c="dimmed" size="sm">
              {method.description}
            </Text>
          </Stack>
        </Group>

        {method.action === "phone" && (
          <Button
            component="a"
            href={siteConfig.contact.phoneHref}
            variant="light"
            leftSection={<IconPhone size={18} />}
          >
            Zadzwoń: {siteConfig.contact.phone}
          </Button>
        )}

        {method.action === "partners" && (
          <Group justify="center" gap="xs">
            {siteConfig.partners.map((partner) => (
              <Button
                key={partner.name}
                component="a"
                href={partner.orderUrl}
                variant="default"
              >
                <Image
                  src={partner.logoUrl}
                  h={partner.logoHeight}
                  fit="contain"
                  w="auto"
                  alt={partner.name}
                />
              </Button>
            ))}
          </Group>
        )}
      </Stack>
    </Card>
  );
};

export function HowToOrder() {
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants: Variants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i === 0 ? -50 : 50,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.3 },
    },
  };

  return (
    <Container size="lg" py="xl" id="how-to-order">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={titleVariants}
      >
        <Title order={2} ta="center" mb="xl">
          Jak złożyć zamówienie?
        </Title>
      </motion.div>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {orderMethods.map((method, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            style={{ height: "100%" }}
          >
            <OrderCard method={method} />
          </motion.div>
        ))}
      </SimpleGrid>
    </Container>
  );
}
