"use client";

import {
  Alert,
  Anchor,
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  Group,
  Image,
  Text,
} from "@mantine/core";
import { IconPhone, IconMail, IconMapPin } from "@tabler/icons-react";
import Link from "next/link";
import { memo } from "react";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/Logo/Logo";
import classes from "./Footer.module.css";

interface LinkGroupItem {
  title: string;
  links: Array<{
    title: string;
    href: string;
  }>;
}

const LinkGroup = ({ title, links }: LinkGroupItem) => (
  <Box>
    <Text fw="bold" mb="sm">
      {title}
    </Text>
    {links.map((link) => (
      <Anchor
        key={link.href}
        component={Link}
        href={link.href}
        c="dimmed"
        fz="sm"
        py={4}
        display="block"
        underline="never"
        className={classes.link}
      >
        {link.title}
      </Anchor>
    ))}
  </Box>
);

const ContactInfo = () => (
  <Box>
    <Text fw="bold" mb="sm">
      Kontakt
    </Text>
    <Anchor
      href={`mailto:${siteConfig.contact.email}`}
      c="dimmed"
      fz="sm"
      py={4}
      display="block"
      underline="never"
      className={classes.link}
    >
      <Group gap="xs">
        <IconMail size={16} />
        <span>{siteConfig.contact.email}</span>
      </Group>
    </Anchor>
    <Anchor
      href={siteConfig.contact.phoneHref}
      c="dimmed"
      fz="sm"
      py={4}
      display="block"
      underline="never"
      className={classes.link}
    >
      <Group gap="xs">
        <IconPhone size={16} />
        <span>{siteConfig.contact.phone}</span>
      </Group>
    </Anchor>
    <Box py={4}>
      <Group gap="xs">
        <IconMapPin size={16} />
        <Text c="dimmed" fz="sm" component="span">
          {siteConfig.contact.address}
        </Text>
      </Group>
    </Box>
  </Box>
);

const OpeningHours = () => (
  <Box>
    <Text fw="bold" mb="sm">
      Godziny otwarcia
    </Text>
    {siteConfig.openingHours.map((item) => (
      <Flex key={item.day} justify="space-between" py={2}>
        <Text fz="sm" c="dimmed">
          {item.day}
        </Text>
        <Text fz="sm" c="dimmed">
          {item.hours}
        </Text>
      </Flex>
    ))}
  </Box>
);

function Footer() {
  const navigationLinks: LinkGroupItem = {
    title: "Nawigacja",
    links: [
      { title: "Menu", href: "/menu" },
      { title: "Kontakt", href: "/kontakt" },
      { title: "O nas", href: "/o-nas" },
    ],
  };

  return (
    <Container component="footer" className={classes.container} mt={"xl"} fluid>
      <Container
        size="xl"
        px={0}
        py={{
          base: "xl",
          sm: "calc(var(--mantine-spacing-xl) * 2)",
        }}
      >
        <Grid>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Box>
              <Logo />
              <Text c="dimmed" size="sm" mt="sm" maw={250}>
                {siteConfig.description}
              </Text>
            </Box>
          </Grid.Col>
          <Grid.Col span={{ base: 6, md: 3 }}>
            <LinkGroup
              title={navigationLinks.title}
              links={navigationLinks.links}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 6, md: 3 }}>
            <ContactInfo />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <OpeningHours />
          </Grid.Col>
        </Grid>

        <Divider my="xl" />

        <Flex
          justify={{ sm: "space-between" }}
          wrap="wrap"
          gap="xl"
          align="center"
        >
          <Text size="xs" c="dimmed">
            © {new Date().getFullYear()} {siteConfig.name}. Wszelkie prawa
            zastrzeżone.
          </Text>

          {siteConfig.partners && siteConfig.partners.length > 0 && (
            <Box>
              <Alert bg="var(--mantine-color-body)" radius="md" p="md">
                <Flex direction="column" gap="xs">
                  <Text fz="sm" fw="bold">
                    Zamów online:
                  </Text>
                  <Group gap="md">
                    {siteConfig.partners.map((partner) => (
                      <Anchor
                        href={partner.orderUrl}
                        target="_blank"
                        key={partner.name}
                        className={classes.partnerLink}
                      >
                        <Image
                          src={partner.logoUrl}
                          alt={partner.name}
                          h={partner.logoHeight}
                          w="auto"
                          style={{ filter: "grayscale(100%)" }}
                        />
                      </Anchor>
                    ))}
                  </Group>
                </Flex>
              </Alert>
            </Box>
          )}
        </Flex>
      </Container>
    </Container>
  );
}

export default memo(Footer);
