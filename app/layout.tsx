import { ThemeProvider } from "@/components/provider/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ConvexClientProvider } from "@/components/provider/convex-provider";
import { Toaster } from "sonner";
import { ModalProvider } from "@/components/provider/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion",
  description: "Notion Clone",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:light)",
        href: "/logo.png",
        url: "/logo.png",
      },
      {
        media: "(prefers-color-scheme:dark)",
        href: "/logo.png",
        url: "/logo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="notion-theme"
          >
            <Toaster position="bottom-center" />
            <ModalProvider />
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
