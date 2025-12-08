import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from '@/components/CookieConsent';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EuHub AI | Strategic AI Implementation",
  description: "Your Strategic AI Implementation Partner in Central Europe. Enterprise-grade AI infrastructure, audit, and automation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-blue-500/30`}>
        <ThemeProvider>
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
