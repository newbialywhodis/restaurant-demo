"use client";

import {
  AppShell,
  Burger,
  Group,
  Button,
  Container,
  Paper,
  Collapse,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ToggleColorScheme } from "./ToggleColorScheme/ToggleColorScheme";
import { Logo } from "@/components/Logo/Logo";
import { paperClasses } from "@/styles/components";
import Footer from "@/components/Footer/Footer";

import { IconHome, IconPizza, IconPhone } from "@tabler/icons-react";

interface AppShellLayoutProps {
  children: React.ReactNode;
}

export function AppShellLayout({ children }: AppShellLayoutProps) {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();

  const navItems = [
    { label: "Główna", href: "/", icon: IconHome },
    { label: "Menu", href: "/menu", icon: IconPizza },
    { label: "Kontakt", href: "/kontakt", icon: IconPhone },
  ];

  return (
    <AppShell header={{ height: "auto" }} mt={"6rem"} padding="sm">
      <AppShell.Header bg={"transparent"} withBorder={false}>
        <Container size="xl">
          <Paper
            shadow="md"
            px={"lg"}
            p={"xs"}
            mt={"md"}
            withBorder
            className={paperClasses.headerPaper}
          >
            <Group justify="space-between">
              <Group>
                <Burger
                  hiddenFrom="sm"
                  opened={opened}
                  onClick={toggle}
                  size="sm"
                />
                <Logo />
              </Group>

              <Group gap="xl" visibleFrom="sm">
                <Group gap="md">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Button
                        key={item.href}
                        component={Link}
                        href={item.href}
                        variant={pathname === item.href ? "default" : "subtle"}
                        color={pathname === item.href ? "warmOrange" : "dimmed"}
                        leftSection={<Icon size={18} />}
                      >
                        {item.label}
                      </Button>
                    );
                  })}
                </Group>

                <Group>
                  <ToggleColorScheme />
                </Group>
              </Group>

              <Box hiddenFrom="sm">
                <ToggleColorScheme />
              </Box>
            </Group>

            <Box hiddenFrom="sm">
              <Collapse in={opened}>
                <Box
                  pt="md"
                  mt="md"
                  style={{
                    borderTop:
                      "1px solid light-dark(var(--mantine-color-warmBeige-2), var(--mantine-color-darkBorder))",
                  }}
                >
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Button
                        key={item.href}
                        component={Link}
                        href={item.href}
                        fullWidth
                        justify="flex-start"
                        leftSection={<Icon size={18} />}
                        variant={pathname === item.href ? "default" : "subtle"}
                        color={pathname === item.href ? "warmOrange" : "gray"}
                        mb="xs"
                        onClick={toggle}
                      >
                        {item.label}
                      </Button>
                    );
                  })}
                </Box>
              </Collapse>
            </Box>
          </Paper>
        </Container>
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
      <Footer />
    </AppShell>
  );
}
