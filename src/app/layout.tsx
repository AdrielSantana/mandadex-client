"use client";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@/styles/main.scss";

import { AnalyticsWrapper } from "./components/analytics";

import { FavoriteContextProvider } from "@/hooks/useFavorite";

import { Montserrat } from "@next/font/google";
import { PokemonFilterContextProvider } from "@/hooks/useFilter";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={montserrat.className} lang="pt-br">
      <head />
      <body>
        <FavoriteContextProvider>
          <PokemonFilterContextProvider>
            {children}
          </PokemonFilterContextProvider>
        </FavoriteContextProvider>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
