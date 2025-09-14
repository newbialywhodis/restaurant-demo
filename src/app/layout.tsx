import "@mantine/core/styles.layer.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import { theme, cssVariablesResolver } from "@/styles/theme";
import { AppShellLayout } from "@/components/Layout/AppShellLayout";

export const metadata = {
  title: "Restauracja Kebab",
  description: "Demonstracyjny projekt pokazujący moje możliwości!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider
          theme={theme}
          cssVariablesResolver={cssVariablesResolver}
        >
          <AppShellLayout>{children}</AppShellLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
