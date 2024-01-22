import { Navigation } from "@/components/Navigation";
import "./globals.css";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <div className="page-container">
          <Navigation />
          {children}
        </div>
        </body>
    </html>
  )
}
