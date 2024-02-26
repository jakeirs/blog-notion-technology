import "@/styles/globals.css";

import { ThemeProvider } from "@/components/blocks/theme-provider";
import { Inter, Josefin_Sans, Outfit, Poppins } from "next/font/google";
import SiteHeader from "@/components/blocks/header";

const inter = Inter({ subsets: ["latin"] });
const josefinSans = Josefin_Sans({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["300", "400", "500", "700", "900"],
  subsets: [],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${poppins.className} min-h-screen bg-background antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
