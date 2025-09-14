"use client";
import { Title, Text, Stack, Group, ThemeIcon, rem, Card } from "@mantine/core";
import { IconPhone, IconMail, IconMapPin } from "@tabler/icons-react";
import { siteConfig } from "@/config/site";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

interface HomeContactProps {
  withTitle?: boolean;
  withMainIcon?: boolean;
}

export function HomeContact({
  withTitle = true,
  withMainIcon = true,
}: HomeContactProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const contactItems = [
    {
      icon: IconPhone,
      text: siteConfig.contact.phone,
    },
    {
      icon: IconMail,
      text: siteConfig.contact.email,
    },
    {
      icon: IconMapPin,
      text: siteConfig.contact.address,
    },
  ];

  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const content = (
    <Stack gap="md">
      {withTitle && (
        <Group gap="md" wrap="nowrap">
          {withMainIcon && (
            <ThemeIcon size="lg" variant="light">
              <IconPhone style={{ width: rem(20), height: rem(20) }} />
            </ThemeIcon>
          )}
          <Title order={3} mb={0}>
            Kontakt
          </Title>
        </Group>
      )}

      {contactItems.map((item, index) => (
        <Card key={index} withBorder shadow="sm" radius="md" padding="md">
          <Group gap="sm">
            <ThemeIcon size="lg" variant="light">
              <item.icon size={18} />
            </ThemeIcon>
            <Text size="md" fw={500}>
              {item.text}
            </Text>
          </Group>
        </Card>
      ))}
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
