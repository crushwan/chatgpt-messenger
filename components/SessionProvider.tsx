"use client";
import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
  session: Session | null;
};

export function SessionProvider({ children, session }: Props) {
  return (
    <Provider>
      <ThemeProvider enableSystem={true} attribute="class">
        {children}
      </ThemeProvider>
    </Provider>
  );
}
