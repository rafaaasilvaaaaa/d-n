"use client";

import * as React from "react";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import { useTheme } from "next-themes";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme: resolvedTheme } = useTheme();
  // sonner: "light" | "dark" | "system"
  const theme = (resolvedTheme as ToasterProps["theme"]) ?? "system";

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
