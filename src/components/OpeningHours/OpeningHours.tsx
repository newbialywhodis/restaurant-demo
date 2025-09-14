"use client";
import {
  Title,
  Text,
  Stack,
  Group,
  ThemeIcon,
  rem,
  Divider,
} from "@mantine/core";
import { IconClock } from "@tabler/icons-react";
import { siteConfig } from "@/config/site";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

interface OpeningHoursProps {
  withIcon?: boolean;
  withTitle?: boolean;
}

export function OpeningHours({
  withIcon = true,
  withTitle = true,
}: OpeningHoursProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.05,
      },
    },
  };

  const content = (
    <Stack gap="md">
      {withTitle && (
        <Group gap="md" wrap="nowrap">
          {withIcon && (
            <ThemeIcon size="lg" variant="light">
              <IconClock style={{ width: rem(20), height: rem(20) }} />
            </ThemeIcon>
          )}
          <Title order={3} mb={0}>
            Godziny otwarcia
          </Title>
        </Group>
      )}

      <Stack gap="xs">
        {siteConfig.openingHours.map((item, index) => (
          <Stack key={item.day} gap={0}>
            <Group justify="space-between">
              <Text c="dimmed">{item.day}</Text>
              <Text fw={500}>{item.hours}</Text>
            </Group>
            {index < siteConfig.openingHours.length - 1 && <Divider />}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );

  if (!isMounted) {
    return content;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
      {content}
    </motion.div>
  );
}
