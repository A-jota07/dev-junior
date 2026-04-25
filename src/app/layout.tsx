import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/Components/Footer";
import { Container } from "@/Components/Container";
import { Header } from "@/Components/Header";



export const metadata: Metadata = {
  title: "Dev-Junior",
  description: "Site desenvolvido com foco em portifolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
    >
      <body>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
        </body>
    </html>
  );
}
