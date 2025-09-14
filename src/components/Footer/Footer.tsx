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

const linkProps = {
  c: "dimmed" as const,
  fz: "sm" as const,
  py: 4,
  display: "block" as const,
  underline: "never" as const,
  className: classes.link,
};

const LinkGroup = ({
  title,
  links,
}: {
  title: string;
  links: Array<{ title: string; href: string }>;
}) => (
  <Box>
    <Text fw="bold" mb="sm">
      {title}
    </Text>
    {links.map(({ href, title }) => (
      <Anchor key={href} component={Link} href={href} {...linkProps}>
        {title}
      </Anchor>
    ))}
  </Box>
);

const ContactItem = ({
  icon: Icon,
  href,
  children,
}: {
  icon: typeof IconMail;
  href?: string;
  children: React.ReactNode;
}) => {
  const content = (
    <Group gap="xs">
      <Icon size={16} />
      <span>{children}</span>
    </Group>
  );

  return href ? (
    <Anchor href={href} {...linkProps}>
      {content}
    </Anchor>
  ) : (
    <Box py={4}>
      <Text c="dimmed" fz="sm" component="span">
        {content}
      </Text>
    </Box>
  );
};

const ContactInfo = () => (
  <Box>
    <Text fw="bold" mb="sm">
      Kontakt
    </Text>
    <ContactItem icon={IconMail} href={`mailto:${siteConfig.contact.email}`}>
      {siteConfig.contact.email}
    </ContactItem>
    <ContactItem icon={IconPhone} href={siteConfig.contact.phoneHref}>
      {siteConfig.contact.phone}
    </ContactItem>
    <ContactItem icon={IconMapPin}>{siteConfig.contact.address}</ContactItem>
  </Box>
);

const OpeningHours = () => (
  <Box>
    <Text fw="bold" mb="sm">
      Godziny otwarcia
    </Text>
    {siteConfig.openingHours.map(({ day, hours }) => (
      <Flex key={day} justify="space-between" py={2}>
        <Text fz="sm" c="dimmed">
          {day}
        </Text>
        <Text fz="sm" c="dimmed">
          {hours}
        </Text>
      </Flex>
    ))}
  </Box>
);

const PartnersSection = () =>
  siteConfig.partners?.length ? (
    <Alert bg="var(--mantine-color-body)" radius="md" p="md">
      <Flex direction="column" gap="xs">
        <Text fz="sm" fw="bold">
          Zamów online:
        </Text>
        <Group gap="md">
          {siteConfig.partners.map(
            ({ name, orderUrl, logoUrl, logoHeight }) => (
              <Anchor
                key={name}
                href={orderUrl}
                target="_blank"
                className={classes.partnerLink}
              >
                <Image
                  src={logoUrl}
                  alt={name}
                  h={logoHeight}
                  w="auto"
                  style={{ filter: "grayscale(100%)" }}
                />
              </Anchor>
            )
          )}
        </Group>
      </Flex>
    </Alert>
  ) : null;

function Footer() {
  const navigationLinks = [
    { title: "Menu", href: "/menu" },
    { title: "Kontakt", href: "/kontakt" },
    { title: "O nas", href: "/o-nas" },
  ];

  return (
    <Container component="footer" className={classes.container} mt="xl" fluid>
      <Container
        size="xl"
        py={{ base: "xl", sm: "calc(var(--mantine-spacing-xl) * 2)" }}
      >
        <Grid>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Logo />
            <Text c="dimmed" size="sm" mt="sm" maw={250}>
              {siteConfig.description}
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 6, md: 3 }}>
            <LinkGroup title="Nawigacja" links={navigationLinks} />
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
          <PartnersSection />
        </Flex>
      </Container>
    </Container>
  );
}

export default memo(Footer);
